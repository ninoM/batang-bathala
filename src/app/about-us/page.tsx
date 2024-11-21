import ResponsiveGoogleDriveImage from "./responsive-gdrive-image";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <ResponsiveGoogleDriveImage
          id="1jvhJunxWdc6QM3EUzLR-vyydI4ibgPKb"
          alt="About Us Image 1"
        />
        <ResponsiveGoogleDriveImage
          id="1lLCuwI2P-Dy1UVQaSTP4DeSBctXEArcT"
          alt="About Us Image 2"
        />
      </div>
    </div>
  );
}
