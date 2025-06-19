export interface UploadedFile {
  id: string;
  s3Key: string;
  filename: string;
  status: 'queued' | 'processing' | 'processed' | 'failed' | 'no credits';
  clipsCount: number;
  createdAt: Date;
}

export interface ProcessingError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}