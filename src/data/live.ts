// Typed access to src/data/live.json, which scripts/sync.mjs regenerates from
// GitHub, pub.dev, npm and the Silifton blog. The site never calls these APIs at runtime.
import data from "./live.json";

export type CalendarDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
export type Pkg = { name: string; registry: "pub" | "npm"; version: string; description: string; url: string; repo?: string };
export type Repo = { name: string; description: string; url: string; stars: number; language?: string; pushedAt: string };
export type Post = { slug: string; title: string; excerpt: string; date: string; url: string; category?: string; read?: string };

export type Live = {
  generatedAt: string;
  github: {
    login: string;
    publicRepos: number;
    followers: number;
    totalStars: number;
    contributionsLastYear: number;
    contributionsAllTime: number; // since profile.githubSince
    calendar: CalendarDay[]; // last ~53 weeks, oldest first, starting on a Sunday
    repos: Repo[]; // notable public repos, most stars first
  };
  packages: Pkg[];
  posts: Post[];
};

export const live = data as Live;
