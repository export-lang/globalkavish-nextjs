/**
 * Single source of truth for the deployed commit hash shown in the footer.
 * Read once here so every route renders the same value instead of each
 * component reading process.env directly.
 */
export const buildHash = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? null;
