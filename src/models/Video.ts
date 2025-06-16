import mongoose, { model, models, Schema } from "mongoose";
export const VIDEO_DIMENTIONS={
    width:1080,
    height:1920,
} as const


export interface IVideo {
  _id?: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  controls?: boolean;
  transformation?: {
    height: number;
    width: number;
    quality?: number;
  };
}

const videoSchema = new Schema<IVideo>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    transformation: {
      height: { type: Number, default: VIDEO_DIMENTIONS.width },
      width: { type: Number, default: VIDEO_DIMENTIONS.width },
      quality: { type: Number, min: 1, max:100 },
    },
  },
  { timestamps: true }
);

// Export the model
const Video = models?.Video || mongoose.model<IVideo>("Video", videoSchema);
export default Video;