"use client";

import Dropzone, { type DropzoneState } from "shadcn-dropzone";
import type { Clip } from "@prisma/client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Loader2, UploadCloud } from "lucide-react";
import { useState } from "react";
import { generateUploadUrl } from "~/actions/s3";
import { toast } from "sonner";
import { processVideo } from "~/actions/generation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";
import { ClipDisplay } from "./clip-display";

export function DashboardClient({
  uploadedFiles,
  clips,
}: {
  uploadedFiles: {
    id: string;
    s3Key: string;
    filename: string;
    status: string;
    clipsCount: number;
    createdAt: Date;
  }[];
  clips: Clip[];
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"upload" | "my-clips">("upload");
  const router = useRouter();

  const handleRefresh = async () => {
    setRefreshing(true);
    router.refresh();
    setTimeout(() => setRefreshing(false), 600);
  };

  const handleDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    const file = files[0]!;

    // Add file validation
    if (!file.type.startsWith("video/")) {
      toast.error("Invalid file type", {
        description: "Please upload a video file (MP4 recommended).",
      });
      return;
    }

    if (file.size > 500 * 1024 * 1024) {
      // 500MB limit
      toast.error("File too large", {
        description: "Please upload a file smaller than 500MB.",
      });
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const { success, signedUrl, uploadedFileId } = await generateUploadUrl({
        filename: file.name,
        contentType: file.type,
      });

      if (!success || !signedUrl || !uploadedFileId) {
        throw new Error("Failed to get upload URL");
      }

      const uploadResponse = await fetch(signedUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });

      if (!uploadResponse.ok) {
        throw new Error(`Upload failed with status: ${uploadResponse.status}`);
      }

      await processVideo(uploadedFileId);

      setFiles([]);

      toast.success("Video uploaded successfully", {
        description:
          "Your video has been scheduled for processing. Check the status below.",
        duration: 5000,
      });

      router.refresh();
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Upload failed", {
        description:
          error instanceof Error
            ? error.message
            : "There was a problem uploading your video. Please try again.",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-5xl flex-col space-y-6 px-4 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Podcast Clipper
          </h1>
          <p className="text-muted-foreground">
            Upload your podcast and get AI-generated clips instantly
          </p>
        </div>
        <Link href="/dashboard/billing">
          <Button>Buy Credits</Button>
        </Link>
      </div>

      <Tabs
        defaultValue="upload"
        onValueChange={(value) => setActiveTab(value as "upload" | "my-clips")}
      >
        <TabsList>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="my-clips">My Clips</TabsTrigger>
        </TabsList>

        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle>Upload Podcast</CardTitle>
              <CardDescription>
                Upload your audio or video file to generate clips
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dropzone
                onDrop={handleDrop}
                accept={{ "video/mp4": [".mp4"] }}
                maxSize={500 * 1024 * 1024}
                disabled={uploading}
                maxFiles={1}
              >
                {(dropzone: DropzoneState) => {
                  const handleFileSelect = () => {
                    // Use the traditional file input approach which is more reliable
                    const input = document.createElement("input");
                    input.type = "file";
                    input.accept = "video/mp4";
                    input.style.display = "none";
                    input.onchange = (e) => {
                      const target = e.target as HTMLInputElement;
                      const files = Array.from(target.files ?? []);
                      handleDrop(files);
                      document.body.removeChild(input);
                    };

                    document.body.appendChild(input);
                    input.click();
                  };

                  return (
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg p-10 text-center border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
                      <UploadCloud className="text-muted-foreground h-12 w-12" />
                      <p className="font-medium">
                        {dropzone.isDragActive
                          ? "Drop your file here"
                          : "Drag and drop your file"}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        or click to browse (MP4 up to 500MB)
                      </p>
                      <Button
                        type="button"
                        variant="default"
                        size="sm"
                        disabled={uploading}
                        onClick={handleFileSelect}
                      >
                        Select File
                      </Button>
                    </div>
                  );
                }}
              </Dropzone>

              <div className="mt-2 flex items-start justify-between">
                <div>
                  {files.length > 0 && (
                    <div className="space-y-1 text-sm">
                      <p className="font-medium">Selected file:</p>
                      {files.map((file) => (
                        <p key={file.name} className="text-muted-foreground">
                          {file.name} ({(file.size / 1024 / 1024).toFixed(1)} MB)
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                <Button
                  disabled={files.length === 0 || uploading}
                  onClick={handleUpload}
                >
                  {uploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    "Upload and Generate Clips"
                  )}
                </Button>
              </div>

              {uploading && (
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm text-muted-foreground">
                      Uploading {Math.round((uploadProgress ?? 0) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(uploadProgress ?? 0) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {uploadedFiles.length > 0 && (
                <div className="pt-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-md mb-2 font-medium">
                      {activeTab === "upload" ? "Upload" : "Gallery"} -{" "}
                      {activeTab === "upload"
                        ? uploadedFiles.length ?? 0
                        : clips.length ?? 0}{" "}
                      {activeTab === "upload" ? "files" : "clips"}
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleRefresh}
                      disabled={refreshing}
                    >
                      {refreshing && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Refresh
                    </Button>
                  </div>
                  <div className="max-h-[300px] overflow-auto rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>File</TableHead>
                          <TableHead>Uploaded</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Clips created</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {uploadedFiles.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell className="max-w-xs truncate font-medium">
                              {item.filename}
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">
                              {new Date(item.createdAt).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              })}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  item.status === "COMPLETED"
                                    ? "default"
                                    : item.status === "PROCESSING"
                                    ? "secondary"
                                    : "destructive"
                                }
                              >
                                {item.status === "COMPLETED"
                                  ? `${item.clipsCount ?? 0} clips`
                                  : item.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {item.clipsCount > 0 ? (
                                <span>
                                  {item.clipsCount} clip
                                  {item.clipsCount !== 1 ? "s" : ""}
                                </span>
                              ) : (
                                <span className="text-muted-foreground">
                                  No clips yet
                                </span>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="my-clips">
          <Card>
            <CardHeader>
              <CardTitle>My Clips</CardTitle>
              <CardDescription>
                View and manage your generated clips here. Processing may take a
                few minutes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ClipDisplay clips={clips} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}