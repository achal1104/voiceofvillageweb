// Real village records come from the backend (Supabase `villages` table). Intentionally empty: no fake villages.
// Shape: { id, name, district, taluka, status: 'Registered'|'Verified'|'Fundraising approved', needs: [], image, fundingProgress? }
export const VILLAGES = []
export const STATUSES = ['Registered', 'Verified', 'Fundraising approved']
