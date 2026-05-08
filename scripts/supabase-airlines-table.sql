-- Supabase airlines 테이블 생성 SQL
-- Supabase Dashboard > SQL Editor에서 실행

CREATE TABLE IF NOT EXISTS airlines (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  badge TEXT,
  cabin_max_weight INTEGER,
  cabin_cage TEXT,
  cabin_note TEXT,
  cargo_max_weight INTEGER,
  cargo_cage TEXT,
  cargo_note TEXT,
  fees TEXT,
  routes TEXT,
  contact TEXT,
  destinations TEXT[] DEFAULT '{}',
  reservation_note TEXT,
  crawled_at TIMESTAMPTZ,
  source_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS 정책 (읽기는 모두 허용, 쓰기는 service role만)
ALTER TABLE airlines ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON airlines
  FOR SELECT USING (true);

CREATE POLICY "Allow service role insert/update" ON airlines
  FOR ALL USING (auth.role() = 'service_role');

-- updated_at 자동 갱신 트리거
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_airlines_updated_at
  BEFORE UPDATE ON airlines
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_airlines_destinations ON airlines USING GIN (destinations);
