'use client';
import { useState } from 'react';
import LoadingSpinner from '../ui/LoadingSpinner';

export default function PhotoUploader({ onUploadComplete }) {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const selected = event.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setError('');
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a photo first.');
      return;
    }
    setIsLoading(true);
    try {
      await onUploadComplete?.(file);
    } catch (err) {
      setError('Upload failed.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && <p className="error">{error}</p>}
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button type="button" onClick={handleUpload} disabled={isLoading}>
        {isLoading ? <LoadingSpinner size="sm" /> : 'Upload & Analyze'}
      </button>
    </div>
  );
}
