// Supabase 설정
const SUPABASE_URL = 'https://gxyqxdciuskrxdmprpfc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DsNr2yYZKvnqTrtYkRSDnA__iRSAEI5';

// Supabase 클라이언트 초기화
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 인증 관련 함수
async function signIn(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });
  if (error) throw error;
  return data;
}

async function signOut() {
  const { error } = await supabaseClient.auth.signOut();
  if (error) throw error;
}

async function getUser() {
  const { data: { user } } = await supabaseClient.auth.getUser();
  return user;
}

// Places CRUD 함수
async function getPlaces() {
  const { data, error } = await supabaseClient
    .from('places')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

async function getPlaceById(id) {
  const { data, error } = await supabaseClient
    .from('places')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
}

async function createPlace(place) {
  const { data, error } = await supabaseClient
    .from('places')
    .insert([place])
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function updatePlace(id, updates) {
  const { data, error } = await supabaseClient
    .from('places')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function deletePlace(id) {
  const { error } = await supabaseClient
    .from('places')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

// 이미지 업로드 함수
async function uploadImage(file) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
  
  const { data, error } = await supabaseClient.storage
    .from('place-images')
    .upload(fileName, file);
  
  if (error) throw error;
  
  // 공개 URL 가져오기
  const { data: { publicUrl } } = supabaseClient.storage
    .from('place-images')
    .getPublicUrl(fileName);
  
  return publicUrl;
}

async function deleteImage(imageUrl) {
  const fileName = imageUrl.split('/').pop();
  const { error } = await supabaseClient.storage
    .from('place-images')
    .remove([fileName]);
  if (error) throw error;
}

// Tags CRUD 함수
async function getTags() {
  const { data, error } = await supabaseClient
    .from('tags')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

async function getActiveTags() {
  const { data, error } = await supabaseClient
    .from('tags')
    .select('*')
    .eq('is_active', true)
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

async function createTag(name) {
  const { data, error } = await supabaseClient
    .from('tags')
    .insert([{ name, is_active: true }])
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function updateTag(id, updates) {
  const { data, error } = await supabaseClient
    .from('tags')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function deleteTag(id) {
  const { error } = await supabaseClient
    .from('tags')
    .delete()
    .eq('id', id);
  if (error) throw error;
}
