'use client';
import PhotoUploader from './PhotoUploader';

export default function CheckInForm() {
  return (
    <form>
      <h3>Bin Check-In</h3>
      <PhotoUploader onUploadComplete={() => Promise.resolve()} />
      <PhotoUploader onUploadComplete={() => Promise.resolve()} />
      <button type="submit">Submit Check-In</button>
    </form>
  );
}
