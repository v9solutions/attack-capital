import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://mivffptwtarqwdxoizod.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdmZmcHR3dGFycXdkeG9pem9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NTI4NzUsImV4cCI6MjA2OTQyODg3NX0.Y09jAxyUP7O4EAfJ7i_B110H80SA9bK25u0elCHj4TQ'
);
