import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://thqmosliqhzuoepqhfww.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRocW1vc2xpcWh6dW9lcHFoZnd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NTg2MTMsImV4cCI6MTk5NzUzNDYxM30.fH4KSEqcfTWnR_fm6VT2i1oEROn9WfmefNhCnk2W4XM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
