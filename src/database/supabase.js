import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseClient = createClient(
  "https://qsegxqiddsdyueydmojq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzZWd4cWlkZHNkeXVleWRtb2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MzYyNDYsImV4cCI6MjAyMjIxMjI0Nn0.AenFMBGFJA2RhTZ1yuUC111sNqHEyTHMnljfc_wPPfc"
);
  