export type PersonalColor = 'Spring Warm' | 'Summer Cool' | 'Autumn Warm' | 'Winter Cool';

export type AestheticType = 'Classic' | 'Minimal' | 'Vintage' | 'Pop' | 'Hip' | 'Lovely' | 'Moody' | 'Retro';

export interface Question {
  id: number;
  type: 'color' | 'aesthetic';
  question: string;
  options: {
    text: string;
    value: PersonalColor | AestheticType | PersonalColor[];
  }[];
}

export const colorQuestions: Question[] = [
  {
    id: 1,
    type: 'color',
    question: '피부색이 어떤 느낌에 더 가까운가요?',
    options: [
      { text: '따뜻한 노란색 한 방울', value: 'Spring Warm' },
      { text: '맑고 뽀얀 핑크색 한 방울', value: 'Summer Cool' },
      { text: '차분하고 건강한 베이지색', value: 'Autumn Warm' },
      { text: '창백하거나 아주 진한 느낌', value: 'Winter Cool' },
    ],
  },
  {
    id: 2,
    type: 'color',
    question: '눈동자 색깔은 어떤가요?',
    options: [
      { text: '밝고 반짝이는 갈색', value: 'Spring Warm' },
      { text: '부드럽고 연한 갈색', value: 'Summer Cool' },
      { text: '깊고 어두운 갈색', value: 'Autumn Warm' },
      { text: '선명하고 강렬한 검은색', value: 'Winter Cool' },
    ],
  },
  {
    id: 3,
    type: 'color',
    question: '어떤 액세서리 소재가 더 잘 어울리나요?',
    options: [
      { text: '반짝이는 골드', value: 'Spring Warm' },
      { text: '깨끗한 실버', value: ['Summer Cool', 'Winter Cool'] },
      { text: '은은한 로즈골드', value: 'Autumn Warm' },
    ],
  },
  {
    id: 4,
    type: 'color',
    question: '머리카락 색깔은 어떤가요?',
    options: [
      { text: '연한 갈색', value: 'Spring Warm' },
      { text: '부드러운 검갈색', value: 'Summer Cool' },
      { text: '진한 고동색', value: 'Autumn Warm' },
      { text: '선명한 검은색', value: 'Winter Cool' },
    ],
  },
  {
    id: 5,
    type: 'color',
    question: '어떤 립스틱 색깔이 더 예뻐 보이나요?',
    options: [
      { text: '복숭아 같은 코랄색', value: 'Spring Warm' },
      { text: '딸기 우유 같은 핑크색', value: 'Summer Cool' },
      { text: '말린 장미 같은 벽돌색', value: 'Autumn Warm' },
      { text: '쨍한 체리 레드색', value: 'Winter Cool' },
    ],
  },
  {
    id: 6,
    type: 'color',
    question: '사람들이 말하는 내 인상은?',
    options: [
      { text: '밝고 귀여운 느낌', value: 'Spring Warm' },
      { text: '깨끗하고 우아한 느낌', value: 'Summer Cool' },
      { text: '차분하고 성숙한 느낌', value: 'Autumn Warm' },
      { text: '차갑고 도시적인 느낌', value: 'Winter Cool' },
    ],
  },
  {
    id: 7,
    type: 'color',
    question: '햇볕에 타면 피부가 어떻게 되나요?',
    options: [
      { text: '빨개졌다가 금방 돌아와요', value: 'Spring Warm' },
      { text: '계속 빨갛게 익어 있어요', value: 'Summer Cool' },
      { text: '빨개지지 않고 바로 까맣게 타요', value: 'Autumn Warm' },
      { text: '빨갛게 되다가 점점 어두워져요', value: 'Winter Cool' },
    ],
  },
  {
    id: 8,
    type: 'color',
    question: '어떤 흰색 셔츠를 입었을 때 얼굴이 더 살아나나요?',
    options: [
      { text: '따뜻하고 부드러운 바닐라/크림색', value: 'Spring Warm' },
      { text: '푸른 기가 도는 아주 맑고 시원한 흰색', value: 'Summer Cool' },
      { text: '차분하고 그윽한 오프화이트/누드톤', value: 'Autumn Warm' },
      { text: '눈이 부실 정도로 선명하고 쨍한 형광 흰색', value: 'Winter Cool' },
    ],
  },
  {
    id: 9,
    type: 'color',
    question: '내 얼굴에 더 잘 어울리는 화장은?',
    options: [
      { text: '반짝거리고 생기 있는 화장', value: 'Spring Warm' },
      { text: '깔끔하고 투명한 화장', value: 'Summer Cool' },
      { text: '그윽하고 분위기 있는 화장', value: 'Autumn Warm' },
      { text: '선이 뚜렷하고 강렬한 화장', value: 'Winter Cool' },
    ],
  },
  {
    id: 10,
    type: 'color',
    question: '옷을 입었을 때 더 예뻐 보이는 색은?',
    options: [
      { text: '노란색, 주황색, 연두색', value: 'Spring Warm' },
      { text: '하늘색, 보라색, 연핑크색', value: 'Summer Cool' },
      { text: '카키색, 갈색, 겨자색', value: 'Autumn Warm' },
      { text: '검은색, 남색, 쨍한 빨간색', value: 'Winter Cool' },
    ],
  },
];

export const aestheticQuestions: Question[] = [
  {
    id: 11,
    type: 'aesthetic',
    question: '어떤 공간에 있을 때 가장 기분이 좋나요?',
    options: [
      { text: '책 냄새 나는 조용한 도서관', value: 'Classic' },
      { text: '햇살이 잘 드는 하얀 방', value: 'Minimal' },
      { text: '오래된 소품이 가득한 가게', value: 'Vintage' },
      { text: '알록달록하고 귀여운 방', value: 'Pop' },
      { text: '자유롭고 힙한 거리', value: 'Hip' },
      { text: '꽃과 풀이 가득한 정원', value: 'Lovely' },
      { text: '어둡지만 분위기 있는 곳', value: 'Moody' },
      { text: '옛날 영화 속 같은 장소', value: 'Retro' },
    ],
  },
  {
    id: 12,
    type: 'aesthetic',
    question: '주말에 하고 싶은 일은?',
    options: [
      { text: '혼자 차 마시며 책 읽기', value: 'Classic' },
      { text: '운동하고 깔끔하게 샐러드 먹기', value: 'Minimal' },
      { text: '시장에서 예쁜 물건 구경하기', value: 'Vintage' },
      { text: '인기 있는 카페 가서 사진 찍기', value: 'Pop' },
      { text: '밤거리를 걷거나 공연 보기', value: 'Hip' },
      { text: '직접 요리하거나 화분 가꾸기', value: 'Lovely' },
      { text: '조용한 바에서 음악 듣기', value: 'Moody' },
      { text: '오래된 레코드 가게 가기', value: 'Retro' },
    ],
  },
  {
    id: 13,
    type: 'aesthetic',
    question: '가장 입고 싶은 옷 스타일은?',
    options: [
      { text: '깔끔한 자켓과 단정한 구두', value: 'Classic' },
      { text: '군더더기 없는 하얀 티와 청바지', value: 'Minimal' },
      { text: '화려한 액세서리와 긴 치마', value: 'Vintage' },
      { text: '색깔이 튀는 귀여운 옷', value: 'Pop' },
      { text: '헐렁한 후드티와 편한 바지', value: 'Hip' },
      { text: '하늘하늘한 원피스', value: 'Lovely' },
      { text: '고급스러운 블랙 드레스', value: 'Moody' },
      { text: '옛날 감성이 느껴지는 니트', value: 'Retro' },
    ],
  },
  {
    id: 14,
    type: 'aesthetic',
    question: '내 방을 꾸민다면 어떤 느낌?',
    options: [
      { text: '나무 가구와 은은한 조명', value: 'Classic' },
      { text: '필요한 것만 있는 깨끗한 방', value: 'Minimal' },
      { text: '여러 가지 천과 식물들', value: 'Vintage' },
      { text: '좋아하는 캐릭터와 포스터들', value: 'Pop' },
      { text: '한정판 신발과 힙한 소품', value: 'Hip' },
      { text: '레이스 커튼과 예쁜 꽃병', value: 'Lovely' },
      { text: '폭신한 소파와 무드등', value: 'Moody' },
      { text: '옛날 라디오와 LP판', value: 'Retro' },
    ],
  },
  {
    id: 15,
    type: 'aesthetic',
    question: '선호하는 가방은?',
    options: [
      { text: '클래식한 가죽 가방', value: 'Classic' },
      { text: '심플한 숄더백', value: 'Minimal' },
      { text: '자수 장식 에코백', value: 'Vintage' },
      { text: '작고 귀여운 포인트 백', value: 'Pop' },
      { text: '커다란 백팩', value: 'Hip' },
      { text: '라탄 소재 바구니 가방', value: 'Lovely' },
      { text: '세련된 핸드백', value: 'Moody' },
      { text: '빈티지한 캔버스백', value: 'Retro' },
    ],
  },
  {
    id: 16,
    type: 'aesthetic',
    question: '듣고 싶은 음악은?',
    options: [
      { text: '잔잔한 클래식', value: 'Classic' },
      { text: '차분한 연주곡', value: 'Minimal' },
      { text: '자유로운 포크송', value: 'Vintage' },
      { text: '신나는 팝송', value: 'Pop' },
      { text: '트렌디한 힙합', value: 'Hip' },
      { text: '기분 좋아지는 어쿠스틱', value: 'Lovely' },
      { text: '분위기 있는 재즈', value: 'Moody' },
      { text: '옛날 감성 시티팝', value: 'Retro' },
    ],
  },
  {
    id: 17,
    type: 'aesthetic',
    question: '가보고 싶은 도시는?',
    options: [
      { text: '조용한 유럽 마을', value: 'Classic' },
      { text: '깔끔한 북유럽 도시', value: 'Minimal' },
      { text: '예술적인 휴양지', value: 'Vintage' },
      { text: '화려한 야경의 대도시', value: 'Pop' },
      { text: '개성 있는 예술가의 거리', value: 'Hip' },
      { text: '평화로운 시골 정원', value: 'Lovely' },
      { text: '새벽 감성이 흐르는 도시', value: 'Moody' },
      { text: '오래된 느낌의 빈티지 도시', value: 'Retro' },
    ],
  },
  {
    id: 18,
    type: 'aesthetic',
    question: '좋아하는 사진 분위기는?',
    options: [
      { text: '어둡지만 분위기 있는 사진', value: 'Classic' },
      { text: '밝고 깨끗한 사진', value: 'Minimal' },
      { text: '따뜻한 노란 필터 사진', value: 'Vintage' },
      { text: '쨍하고 선명한 사진', value: 'Pop' },
      { text: '자연스럽고 거친 느낌의 사진', value: 'Hip' },
      { text: '부드럽고 몽글몽글한 사진', value: 'Lovely' },
      { text: '감성적인 흑백 사진', value: 'Moody' },
      { text: '오래된 필름 카메라 느낌', value: 'Retro' },
    ],
  },
  {
    id: 19,
    type: 'aesthetic',
    question: '어떤 사람이 되고 싶나요?',
    options: [
      { text: '지적인 전문가', value: 'Classic' },
      { text: '자신을 잘 가꾸는 사람', value: 'Minimal' },
      { text: '자유로운 예술가', value: 'Vintage' },
      { text: '에너지가 넘치는 사람', value: 'Pop' },
      { text: '당당하고 멋진 사람', value: 'Hip' },
      { text: '친절하고 따스한 사람', value: 'Lovely' },
      { text: '매력적이고 신비로운 사람', value: 'Moody' },
      { text: '자신만의 색깔이 있는 사람', value: 'Retro' },
    ],
  },
  {
    id: 20,
    type: 'aesthetic',
    question: '좋아하는 향기는?',
    options: [
      { text: '은은한 비누 향', value: 'Classic' },
      { text: '깨끗한 숲속 향', value: 'Minimal' },
      { text: '포근한 나무 향', value: 'Vintage' },
      { text: '달콤한 과일 향', value: 'Pop' },
      { text: '시원한 바다 향', value: 'Hip' },
      { text: '향긋한 꽃 향', value: 'Lovely' },
      { text: '진한 머스크 향', value: 'Moody' },
      { text: '상큼한 레몬 향', value: 'Retro' },
    ],
  },
  {
    id: 21,
    type: 'aesthetic',
    question: '가장 편한 신발은?',
    options: [
      { text: '깔끔한 로퍼', value: 'Classic' },
      { text: '하얀 운동화', value: 'Minimal' },
      { text: '편안한 샌들', value: 'Vintage' },
      { text: '귀여운 단화', value: 'Pop' },
      { text: '힙한 운동화', value: 'Hip' },
      { text: '부드러운 플랫슈즈', value: 'Lovely' },
      { text: '높은 힐', value: 'Moody' },
      { text: '클래식한 운동화', value: 'Retro' },
    ],
  },
  {
    id: 22,
    type: 'aesthetic',
    question: '휴대폰을 꾸민다면?',
    options: [
      { text: '심플한 가죽 케이스', value: 'Classic' },
      { text: '아무것도 없는 투명 케이스', value: 'Minimal' },
      { text: '직접 만든 비즈 장식', value: 'Vintage' },
      { text: '화려한 캐릭터 스티커', value: 'Pop' },
      { text: '멋진 로고 디자인', value: 'Hip' },
      { text: '파스텔 톤의 꽃무늬', value: 'Lovely' },
      { text: '매트한 검은색 케이스', value: 'Moody' },
      { text: '옛날 느낌의 디자인', value: 'Retro' },
    ],
  },
  {
    id: 23,
    type: 'aesthetic',
    question: '어떤 옷감이 좋은가요?',
    options: [
      { text: '부드러운 니트', value: 'Classic' },
      { text: '탄탄한 면', value: 'Minimal' },
      { text: '가벼운 레이스', value: 'Vintage' },
      { text: '반짝거리는 소재', value: 'Pop' },
      { text: '질긴 청바지 소재', value: 'Hip' },
      { text: '바스락거리는 린넨', value: 'Lovely' },
      { text: '매끄러운 실크', value: 'Moody' },
      { text: '폭신한 코듀로이', value: 'Retro' },
    ],
  },
  {
    id: 24,
    type: 'aesthetic',
    question: '꿈꾸는 여행은?',
    options: [
      { text: '유명한 박물관 구경', value: 'Classic' },
      { text: '도심 속 조용한 휴식', value: 'Minimal' },
      { text: '자연 속에서 캠핑', value: 'Vintage' },
      { text: '친구들과 테마파크 가기', value: 'Pop' },
      { text: '힙한 맛집 찾아다니기', value: 'Hip' },
      { text: '평화로운 기차 여행', value: 'Lovely' },
      { text: '분위기 좋은 야경 보기', value: 'Moody' },
      { text: '옛날 감성 가득한 골목 탐방', value: 'Retro' },
    ],
  },
  {
    id: 25,
    type: 'aesthetic',
    question: '마지막으로, 당신을 닮은 단어는?',
    options: [
      { text: '단정한', value: 'Classic' },
      { text: '깨끗한', value: 'Minimal' },
      { text: '자유로운', value: 'Vintage' },
      { text: '통통 튀는', value: 'Pop' },
      { text: '개성 있는', value: 'Hip' },
      { text: '다정한', value: 'Lovely' },
      { text: '매력적인', value: 'Moody' },
      { text: '특별한', value: 'Retro' },
    ],
  },
];

export interface Result {
  id: string;
  color: PersonalColor;
  aesthetic: AestheticType;
  name: string;
  keywords: string[];
  city: string;
  timeOfDay: string;
  spaceVibe: string;
  makeupGuide: string;
  fashionGuide: string;
  perfumeGuide: string;
  colors: { hex: string; name: string }[];
}

export const results: Result[] = [];

const aestheticMap = {
  'Classic': { name: 'CLASSIC' },
  'Minimal': { name: 'MINIMAL' },
  'Vintage': { name: 'VINTAGE' },
  'Pop': { name: 'POP' },
  'Hip': { name: 'HIP' },
  'Lovely': { name: 'LOVELY' },
  'Moody': { name: 'MOODY' },
  'Retro': { name: 'RETRO' },
};

const uniqueCities: Record<string, string[]> = {
  'Classic': ['London', 'Vienna', 'Kyoto', 'Oxford'],
  'Minimal': ['Stockholm', 'Copenhagen', 'Zurich', 'Singapore'],
  'Vintage': ['Marrakesh', 'Porto', 'Mexico City', 'Ubud'],
  'Pop': ['Tokyo', 'Seoul', 'Melbourne', 'Shanghai'],
  'Hip': ['New York', 'Berlin', 'Brooklyn', 'Shoreditch'],
  'Lovely': ['Provence', 'Cotswolds', 'Hallstatt', 'Jeju'],
  'Moody': ['Paris', 'Hong Kong', 'Venice', 'Milan'],
  'Retro': ['LA', 'Palm Springs', 'Lisbon', 'Taipei'],
};

const uniqueTimes: Record<string, string[]> = {
  'Spring Warm': ['10:00 AM', '03:00 PM', '11:30 AM', '01:00 PM'],
  'Summer Cool': ['07:30 AM', '09:00 AM', '06:00 PM', '08:00 AM'],
  'Autumn Warm': ['04:30 PM', '05:00 PM', '08:30 PM', '02:00 PM'],
  'Winter Cool': ['11:00 PM', '02:00 AM', '12:00 AM', '09:00 PM'],
};

const uniqueSpaces: Record<string, string[]> = {
  'Classic': ['Historical Library', 'Grand Piano Room', 'Ivy-covered Wall', 'Antique Study'],
  'Minimal': ['Sunlit Gallery', 'Glass House', 'Pure White Studio', 'Modern Lobby'],
  'Vintage': ['Hidden Courtyard', 'Flea Market', 'Seaside Atelier', 'Old Rooftop'],
  'Pop': ['Neon Arcade', 'Colorful Boutique', 'Bubblegum Shop', 'Visual Pop-up'],
  'Hip': ['Concrete Loft', 'Underground Bar', 'Skate Park', 'Night Cityscape'],
  'Lovely': ['Secret Rose Garden', 'Daisy Field', 'Greenhouse', 'Lace-curtained Bedroom'],
  'Moody': ['Velvet Lounge', 'Dim-lit Gallery', 'Rainy Bistro', 'Shadowy Hallway'],
  'Retro': ['Vintage Diner', 'Old Records Shop', 'Classic Car Interior', 'Film Projector Room'],
};

// 32 Unique English Keyword Sets
const keywordMap: Record<string, string[]> = {
  'Spring Warm-Classic': ['Polished', 'Sunny', 'Heritage', 'Gracious', 'Bright'],
  'Spring Warm-Minimal': ['Lucid', 'Airy', 'Warm-Modern', 'Pure', 'Gentle'],
  'Spring Warm-Vintage': ['Nostalgic', 'Earthy', 'Golden', 'Bohemian', 'Sunkissed'],
  'Spring Warm-Pop': ['Playful', 'Electric', 'Fizzy', 'Vivid', 'Joyful'],
  'Spring Warm-Hip': ['Urban-Glow', 'Street-Luxe', 'Bold', 'Active', 'Spirited'],
  'Spring Warm-Lovely': ['Sweet', 'Nectar', 'Bloom', 'Peach', 'Romantic'],
  'Spring Warm-Moody': ['Velvety', 'Amber', 'Deep-Bloom', 'Mysterious', 'Sultry'],
  'Spring Warm-Retro': ['Funky', 'Groove', 'Analog', 'Cheerful', 'Disco'],
  'Summer Cool-Classic': ['Ivory-Luxe', 'Serene', 'Graceful', 'Cool-Legacy', 'Poised'],
  'Summer Cool-Minimal': ['Crisp', 'Ethereal', 'Frozen', 'Linear', 'Silent'],
  'Summer Cool-Vintage': ['Dusty', 'Muted', 'Faded', 'Antique-Pastel', 'Dreamy'],
  'Summer Cool-Pop': ['Neon-Pastel', 'Synthetic', 'Candy', 'Bubbly', 'Digital'],
  'Summer Cool-Hip': ['Cyber', 'Sleek', 'Metallic', 'Avant-Garde', 'Chill'],
  'Summer Cool-Lovely': ['Powdery', 'Angelic', 'Mist', 'Porcelain', 'Soft'],
  'Summer Cool-Moody': ['Shadowy', 'Slate', 'Foggy', 'Cinematic', 'Melancholic'],
  'Summer Cool-Retro': ['Synthwave', 'Plastic', 'Chillwave', 'Future-Nostalgia', 'Vapor'],
  'Autumn Warm-Classic': ['Stately', 'Harvest', 'Oak', 'Timeless', 'Sophisticated'],
  'Autumn Warm-Minimal': ['Organic', 'Raw', 'Zen', 'Earthy-Chic', 'Sculptural'],
  'Autumn Warm-Vintage': ['Rustic', 'Rugged', 'Folk', 'Sepia', 'Timeworn'],
  'Autumn Warm-Pop': ['Spicy', 'Bold-Earth', 'Eclectic', 'Tribal-Modern', 'Heat'],
  'Autumn Warm-Hip': ['Gritty', 'Industrial', 'Utilitarian', 'Street-Wise', 'Raw-Luxe'],
  'Autumn Warm-Lovely': ['Cosy', 'Enveloping', 'Warm-Hearted', 'Mellow', 'Natural'],
  'Autumn Warm-Moody': ['Smoldering', 'Noir', 'Gothic-Earth', 'Intense', 'Dramatic'],
  'Autumn Warm-Retro': ['Groovy', 'Corduroy', 'Saturated', 'Soulful', '70s-Vibe'],
  'Winter Cool-Classic': ['Regal', 'Midnight', 'Sharp', 'Monumental', 'Aristocratic'],
  'Winter Cool-Minimal': ['Absolute', 'Monochromatic', 'Clinical', 'Powerful', 'Void'],
  'Winter Cool-Vintage': ['Victorian-Noir', 'Velvet', 'Cold-Antique', 'Haunted', 'Ornate'],
  'Winter Cool-Pop': ['High-Contrast', 'Glitch', 'Kinetic', 'Acid', 'Shocking'],
  'Winter Cool-Hip': ['Hype', 'Dark-Web', 'Technical', 'Brutalist', 'High-Street'],
  'Winter Cool-Lovely': ['Icy', 'Doll-like', 'Crystal', 'Stark-Romantic', 'Glacial'],
  'Winter Cool-Moody': ['Vampy', 'Obsidian', 'Abyss', 'Edge', 'Provocative'],
  'Winter Cool-Retro': ['Mid-Century-Cool', 'Graphic', 'Bold-Static', 'Neo-Noir', 'Jazz'],
};

const paletteMap: Record<string, { hex: string; name: string }[]> = {
  'Spring Warm-Classic': [
    { hex: '#E6D5C3', name: 'Warm Beige' }, { hex: '#D4A373', name: 'Camel' }, { hex: '#F5EBE0', name: 'Cream' }, { hex: '#FFD93D', name: 'Gold' }, { hex: '#CCD5AE', name: 'Sage' }
  ],
  'Spring Warm-Minimal': [
    { hex: '#FDFCF0', name: 'Ivory' }, { hex: '#FFD93D', name: 'Soft Yellow' }, { hex: '#FFB100', name: 'Apricot' }, { hex: '#E9EDC9', name: 'Mint' }, { hex: '#FAEDCD', name: 'Pale Sand' }
  ],
  'Spring Warm-Vintage': [
    { hex: '#D4A373', name: 'Tan' }, { hex: '#FF8400', name: 'Terra Cotta' }, { hex: '#F49D1A', name: 'Mustard' }, { hex: '#CCD5AE', name: 'Warm Green' }, { hex: '#FEFAE0', name: 'Butter' }
  ],
  'Spring Warm-Pop': [
    { hex: '#FFD93D', name: 'Bright Yellow' }, { hex: '#FF8400', name: 'Orange' }, { hex: '#606C38', name: 'Grass Green' }, { hex: '#2A9D8F', name: 'Turquoise' }, { hex: '#E76F51', name: 'Coral' }
  ],
  'Spring Warm-Hip': [
    { hex: '#BC6C25', name: 'Burnt Orange' }, { hex: '#606C38', name: 'Khaki' }, { hex: '#DDA15E', name: 'Gold Tan' }, { hex: '#283618', name: 'Deep Olive' }, { hex: '#FEFAE0', name: 'Cream' }
  ],
  'Spring Warm-Lovely': [
    { hex: '#FFC8DD', name: 'Pastel Pink' }, { hex: '#FFAFCC', name: 'Peach' }, { hex: '#BDE0FE', name: 'Light Blue' }, { hex: '#A2D2FF', name: 'Sky' }, { hex: '#FEFAE0', name: 'Ivory' }
  ],
  'Spring Warm-Moody': [
    { hex: '#606C38', name: 'Forest Green' }, { hex: '#BC6C25', name: 'Deep Gold' }, { hex: '#283618', name: 'Dark Moss' }, { hex: '#DDA15E', name: 'Warm Brown' }, { hex: '#8B0000', name: 'Brick' }
  ],
  'Spring Warm-Retro': [
    { hex: '#E76F51', name: 'Tomato Red' }, { hex: '#264653', name: 'Deep Teal' }, { hex: '#2A9D8F', name: 'Aqua' }, { hex: '#E9C46A', name: 'Mustard' }, { hex: '#F4A261', name: 'Sandy' }
  ],
  'Summer Cool-Classic': [
    { hex: '#1D3557', name: 'Navy' }, { hex: '#457B9D', name: 'Cool Blue' }, { hex: '#A8DADC', name: 'Sky' }, { hex: '#F1FAEE', name: 'Cool White' }, { hex: '#E63946', name: 'Ruby Point' }
  ],
  'Summer Cool-Minimal': [
    { hex: '#FFFFFF', name: 'Stark White' }, { hex: '#F1FAEE', name: 'Mint White' }, { hex: '#A8DADC', name: 'Powder Blue' }, { hex: '#457B9D', name: 'Grey Blue' }, { hex: '#A8A8A8', name: 'Silver' }
  ],
  'Summer Cool-Vintage': [
    { hex: '#BDB2FF', name: 'Lavender' }, { hex: '#FFC6FF', name: 'Dusty Rose' }, { hex: '#9BF6FF', name: 'Pale Aqua' }, { hex: '#A0C4FF', name: 'Mauve Blue' }, { hex: '#D1D1D1', name: 'Ash' }
  ],
  'Summer Cool-Pop': [
    { hex: '#FF006E', name: 'Bright Pink' }, { hex: '#8338EC', name: 'Violet' }, { hex: '#3A86FF', name: 'Electric Blue' }, { hex: '#FFBE0B', name: 'Lemon' }, { hex: '#FB5607', name: 'Aqua Orange' }
  ],
  'Summer Cool-Hip': [
    { hex: '#2B2D42', name: 'Charcoal' }, { hex: '#8D99AE', name: 'Cool Grey' }, { hex: '#EDF2F4', name: 'Ice White' }, { hex: '#EF233C', name: 'Cool Red' }, { hex: '#D90429', name: 'Crimson' }
  ],
  'Summer Cool-Lovely': [
    { hex: '#FFD1DC', name: 'Baby Pink' }, { hex: '#C1E1C1', name: 'Tea Green' }, { hex: '#B2CEFE', name: 'Soft Blue' }, { hex: '#D1D1D1', name: 'Pearl' }, { hex: '#F5F5F5', name: 'Ivory' }
  ],
  'Summer Cool-Moody': [
    { hex: '#4B0082', name: 'Deep Plum' }, { hex: '#483D8B', name: 'Dark Slate' }, { hex: '#2F4F4F', name: 'Teal Grey' }, { hex: '#A9A9A9', name: 'Steel' }, { hex: '#C0C0C0', name: 'Silver' }
  ],
  'Summer Cool-Retro': [
    { hex: '#00F5D4', name: 'Mint' }, { hex: '#00BBF9', name: 'Cyan' }, { hex: '#FEE440', name: 'Yellow' }, { hex: '#F15BB5', name: 'Magenta' }, { hex: '#9B5DE5', name: 'Purple' }
  ],
  'Autumn Warm-Classic': [
    { hex: '#3D2B1F', name: 'Espresso' }, { hex: '#6B4226', name: 'Dark Brown' }, { hex: '#946B2D', name: 'Olive' }, { hex: '#BC6C25', name: 'Camel' }, { hex: '#2D2926', name: 'Bronze' }
  ],
  'Autumn Warm-Minimal': [
    { hex: '#D5BDAF', name: 'Sand' }, { hex: '#E3D5CA', name: 'Beige' }, { hex: '#F5EBE0', name: 'Cream' }, { hex: '#D6CCC2', name: 'Taupe' }, { hex: '#BC6C25', name: 'Tan' }
  ],
  'Autumn Warm-Vintage': [
    { hex: '#582F0E', name: 'Rust' }, { hex: '#7F4F24', name: 'Brown' }, { hex: '#936639', name: 'Ochre' }, { hex: '#A68A64', name: 'Mustard' }, { hex: '#B6AD90', name: 'Moss' }
  ],
  'Autumn Warm-Pop': [
    { hex: '#D4A373', name: 'Pumpkin' }, { hex: '#264653', name: 'Teal' }, { hex: '#E9C46A', name: 'Gold' }, { hex: '#F4A261', name: 'Salmon' }, { hex: '#E76F51', name: 'Brick' }
  ],
  'Autumn Warm-Hip': [
    { hex: '#283618', name: 'Deep Green' }, { hex: '#606C38', name: 'Olive' }, { hex: '#BC6C25', name: 'Sienna' }, { hex: '#2D2926', name: 'Black Brown' }, { hex: '#DDA15E', name: 'Gold' }
  ],
  'Autumn Warm-Lovely': [
    { hex: '#9D8189', name: 'Warm Rose' }, { hex: '#F4ACB7', name: 'Salmon Pink' }, { hex: '#FFE5D9', name: 'Peach Cream' }, { hex: '#D8E2DC', name: 'Sage' }, { hex: '#BC6C25', name: 'Gold' }
  ],
  'Autumn Warm-Moody': [
    { hex: '#312244', name: 'Deep Purple' }, { hex: '#4D194D', name: 'Wine' }, { hex: '#006466', name: 'Dark Teal' }, { hex: '#0B525B', name: 'Forest' }, { hex: '#BC6C25', name: 'Deep Gold' }
  ],
  'Autumn Warm-Retro': [
    { hex: '#7F5539', name: 'Cedar' }, { hex: '#9C6644', name: 'Chestnut' }, { hex: '#B08968', name: 'Tan' }, { hex: '#DDB892', name: 'Buff' }, { hex: '#E6CCB2', name: 'Almond' }
  ],
  'Winter Cool-Classic': [
    { hex: '#000000', name: 'True Black' }, { hex: '#FFFFFF', name: 'Pure White' }, { hex: '#000080', name: 'Navy' }, { hex: '#800020', name: 'Burgundy' }, { hex: '#C0C0C0', name: 'Silver' }
  ],
  'Winter Cool-Minimal': [
    { hex: '#000000', name: 'Black' }, { hex: '#FFFFFF', name: 'White' }, { hex: '#E5E5E5', name: 'Platinum' }, { hex: '#14213D', name: 'Oxford Blue' }, { hex: '#FCA311', name: 'Yellow Point' }
  ],
  'Winter Cool-Vintage': [
    { hex: '#240046', name: 'Deep Violet' }, { hex: '#3C096C', name: 'Purple' }, { hex: '#5A189A', name: 'Amethyst' }, { hex: '#10002B', name: 'Midnight' }, { hex: '#C0C0C0', name: 'Silver' }
  ],
  'Winter Cool-Pop': [
    { hex: '#FF00FF', name: 'Neon Pink' }, { hex: '#00FFFF', name: 'Cyan' }, { hex: '#0000FF', name: 'Electric Blue' }, { hex: '#FFFF00', name: 'Neon Yellow' }, { hex: '#000000', name: 'Black' }
  ],
  'Winter Cool-Hip': [
    { hex: '#000000', name: 'Black' }, { hex: '#39FF14', name: 'Neon Green' }, { hex: '#FFFFFF', name: 'White' }, { hex: '#121212', name: 'Dark Grey' }, { hex: '#808080', name: 'Silver' }
  ],
  'Winter Cool-Lovely': [
    { hex: '#FFB7C5', name: 'Icy Pink' }, { hex: '#FFFFFF', name: 'Snow White' }, { hex: '#89CFF0', name: 'Baby Blue' }, { hex: '#C0C0C0', name: 'Silver' }, { hex: '#000000', name: 'Black' }
  ],
  'Winter Cool-Moody': [
    { hex: '#4A0E0E', name: 'Burgundy' }, { hex: '#000000', name: 'Black' }, { hex: '#1A1A1D', name: 'Gunmetal' }, { hex: '#6F2232', name: 'Crimson' }, { hex: '#950740', name: 'Deep Rose' }
  ],
  'Winter Cool-Retro': [
    { hex: '#0047AB', name: 'Cobalt' }, { hex: '#FF0000', name: 'Pure Red' }, { hex: '#000000', name: 'Black' }, { hex: '#FFFFFF', name: 'White' }, { hex: '#FFFF00', name: 'Yellow' }
  ],
};

const perfumeMap = {
  'Spring Warm': '상큼하고 달콤한 프루티 플로럴 향',
  'Summer Cool': '깨끗하고 시원한 워터리 솝 향',
  'Autumn Warm': '차분하고 그윽한 우디 머스크 향',
  'Winter Cool': '강렬하고 시크한 스파이시 플로럴 향',
};

let colorIdx = 0;
for (const [colorKey, colorData] of Object.entries({
  'Spring Warm': { name: 'BRIGHT' },
  'Summer Cool': { name: 'CLEAR' },
  'Autumn Warm': { name: 'DEEP' },
  'Winter Cool': { name: 'CHIC' },
})) {
  let aestheticIdx = 0;
  for (const [aestheticKey, aestheticData] of Object.entries(aestheticMap)) {
    const id = `${colorKey}-${aestheticKey}`;
    results.push({
      id,
      color: colorKey as PersonalColor,
      aesthetic: aestheticKey as AestheticType,
      name: aestheticData.name,
      keywords: keywordMap[id], // 32 Unique Keyword Sets
      city: uniqueCities[aestheticKey][colorIdx],
      timeOfDay: uniqueTimes[colorKey][aestheticIdx % 4],
      spaceVibe: uniqueSpaces[aestheticKey][colorIdx],
      makeupGuide: `살려낸 ${colorData.name} 무드 위에 ${aestheticData.name} 감성을 한 방울 더해 완성하세요.`,
      fashionGuide: `${aestheticData.name} 스타일의 아이템을 ${colorData.name} 컬러감으로 매치하는 것이 핵심입니다.`,
      perfumeGuide: perfumeMap[colorKey as PersonalColor],
      colors: paletteMap[id],
    });
    aestheticIdx++;
  }
  colorIdx++;
}
