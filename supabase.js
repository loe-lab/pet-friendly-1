// Supabase 설정
const SUPABASE_URL = 'https://gxyqxdciuskrxdmprpfc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DsNr2yYZKvnqTrtYkRSDnA__iRSAEI5';

// Supabase 클라이언트 초기화 (에러 핸들링 포함)
let supabaseClient;
try {
  if (typeof window.supabase === 'undefined') {
    console.error('[Supabase] SDK가 로드되지 않았습니다. CDN을 확인하세요.');
  } else {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('[Supabase] 클라이언트 초기화 성공');
  }
} catch (err) {
  console.error('[Supabase] 클라이언트 초기화 실패:', err);
}

// 인증 관련 함수
async function signIn(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });
  if (error) throw error;
  return data;
}

async function signUp(email, password) {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password
  });
  if (error) throw error;
  return data;
}

async function signInWithKakao() {
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: window.location.origin + '/index.html'
    }
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

// 프로필 관련 함수
async function createProfile(profile) {
  const { data, error } = await supabaseClient
    .from('profiles')
    .upsert([profile], { onConflict: 'id' })
    .select()
    .single();
  if (error) {
    console.error('createProfile 에러:', error);
    throw error;
  }
  console.log('createProfile 성공:', data);
  return data;
}

async function getProfile(userId) {
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  if (error) throw error;
  return data;
}

async function updateProfile(userId, updates) {
  const { data, error } = await supabaseClient
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();
  if (error) throw error;
  return data;
}

// 좋아요 관련 함수
async function addLike(userId, placeId) {
  const { data, error } = await supabaseClient
    .from('likes')
    .insert([{ user_id: userId, place_id: placeId }])
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function removeLike(userId, placeId) {
  const { error } = await supabaseClient
    .from('likes')
    .delete()
    .eq('user_id', userId)
    .eq('place_id', placeId);
  if (error) throw error;
}

async function getUserLikes(userId) {
  const { data, error } = await supabaseClient
    .from('likes')
    .select('place_id')
    .eq('user_id', userId);
  if (error) throw error;
  return data.map(l => l.place_id);
}

async function getLikeCount(placeId) {
  const { count, error } = await supabaseClient
    .from('likes')
    .select('*', { count: 'exact', head: true })
    .eq('place_id', placeId);
  if (error) throw error;
  return count;
}

// Places CRUD 함수
async function getPlaces() {
  const { data, error } = await supabaseClient
    .from('places')
    .select('*')
    .order('id', { ascending: false });
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
  // 빈 데이터로 덮어쓰기 방지 (최종 방어선)
  if (!updates.title || !updates.title.trim()) {
    console.error('[updatePlace] 제목이 비어있어 저장을 차단합니다. id:', id);
    throw new Error('제목이 비어있어 저장할 수 없습니다.');
  }
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
