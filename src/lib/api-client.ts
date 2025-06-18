import { IVideo } from "@/models/Video";

// Remove _id when creating a new video
export type VideoFormData = Omit<IVideo, "_id">;

type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
};

class ApiClient {
  private baseUrl = "/api";

  private async fetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
    const { method = "GET", body, headers = {} } = options;

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      // Optional: Better error message
      const errorMessage = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorMessage}`);
    }

    return response.json();
  }

  //GET all videos
  async getVideos() {
    return this.fetch<IVideo[]>("/videos");
  }

  //GET a single video by ID
  async getVideo(id: string) {
    return this.fetch<IVideo>(`/videos/${id}`);
  }

  //POST to create a new video
  async createVideo(videoData: VideoFormData) {
    return this.fetch<IVideo>("/videos", {
      method: "POST",
      body: videoData,
    });
  }

  //You can add update/delete
  async updateVideo(id: string, data: Partial<VideoFormData>) {
    return this.fetch<IVideo>(`/videos/${id}`, {
      method: "PUT",
      body: data,
    });
  }

  async deleteVideo(id: string) {
    return this.fetch<{ message: string }>(`/videos/${id}`, {
      method: "DELETE",
    });
  }
}

export const apiClient = new ApiClient();
