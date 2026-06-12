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
  weather: string;
  interior: string;
  music: string;
  photoTip: string;
  feedStyle: string;
  mediaGenre: string;
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

const weatherMap: Record<string, string> = {
  'Spring Warm-Classic': '햇살 부드러운 늦봄의 오전',
  'Spring Warm-Minimal': '구름 한 점 없이 맑은 정오',
  'Spring Warm-Vintage': '해 질 녘 주황빛 노을이 감도는 오후',
  'Spring Warm-Pop': '무지개가 뜬 소나기 직후의 공원',
  'Spring Warm-Hip': '바람이 기분 좋게 부는 초저녁',
  'Spring Warm-Lovely': '벚꽃 잎이 흩날리는 따뜻한 정오',
  'Spring Warm-Moody': '비 온 뒤 갓 피어오른 몽글몽글한 안개',
  'Spring Warm-Retro': '윤슬이 반짝이는 눈부신 바닷가 오후',
  'Summer Cool-Classic': '장마가 가신 뒤의 청량한 공기',
  'Summer Cool-Minimal': '차가운 서리가 내려앉은 이른 아침',
  'Summer Cool-Vintage': '안개가 자욱하게 깔린 보랏빛 새벽',
  'Summer Cool-Pop': '물보라가 일렁이는 한여름의 수영장',
  'Summer Cool-Hip': '차가운 도시의 밤공기가 느껴지는 자정',
  'Summer Cool-Lovely': '파란 하늘 아래 수국이 핀 초여름',
  'Summer Cool-Moody': '잔잔하게 비가 내리는 창가',
  'Summer Cool-Retro': '시티팝이 어울리는 푸른 밤의 드라이브',
  'Autumn Warm-Classic': '낙엽 타는 냄새가 나는 깊은 가을 오후',
  'Autumn Warm-Minimal': '갈대밭에 바람이 머물다 가는 황혼',
  'Autumn Warm-Vintage': '서재의 먼지가 빛나 보이는 나른한 오후',
  'Autumn Warm-Pop': '단풍이 화려하게 물든 도심의 공원',
  'Autumn Warm-Hip': '모닥불 연기가 피어오르는 숲속의 밤',
  'Autumn Warm-Lovely': '따뜻한 코코아 향이 나는 겨울 전날 밤',
  'Autumn Warm-Moody': '벽난로 불꽃이 일렁이는 어두운 방',
  'Autumn Warm-Retro': '턴테이블 위의 먼지마저 따뜻해 보이는 오후',
  'Winter Cool-Classic': '눈이 소복하게 쌓인 정막한 겨울 새벽',
  'Winter Cool-Minimal': '얼음처럼 차가운 달빛이 비치는 밤',
  'Winter Cool-Vintage': '중세 유럽의 돌벽에 서리가 내린 새벽',
  'Winter Cool-Pop': '화려한 전광판이 번쩍이는 눈 내리는 도심',
  'Winter Cool-Hip': '시베리아 횡단열차 안에서 보는 설원',
  'Winter Cool-Lovely': '하얀 코트를 입고 싶은 첫눈 오는 아침',
  'Winter Cool-Moody': '차가운 와인 한 잔이 어울리는 고요한 밤',
  'Winter Cool-Retro': '흑백 필름 속 눈 내리는 파리의 거리',
};

const interiorMap: Record<string, string> = {
  'Spring Warm-Classic': '밝은 톤의 원목 가구와 실크 커튼',
  'Spring Warm-Minimal': '화이트 톤의 가구와 포인트가 되는 노란 꽃병',
  'Spring Warm-Vintage': '라탄 소재 소품과 따뜻한 질감의 패브릭',
  'Spring Warm-Pop': '컬러풀한 아크릴 의자와 팝아트 포스터',
  'Spring Warm-Hip': '인더스트리얼 무드의 노출 콘크리트와 네온사인',
  'Spring Warm-Lovely': '레이스 장식의 침구와 화사한 생화 장식',
  'Spring Warm-Moody': '짙은 우드 가구와 은은한 살구색 조명',
  'Spring Warm-Retro': '체크무늬 식탁보와 빈티지한 주방 소품',
  'Summer Cool-Classic': '대리석 테이블과 실버 프레임의 거울',
  'Summer Cool-Minimal': '미니멀한 스틸 가구와 화이트 벽면',
  'Summer Cool-Vintage': '파스텔 톤의 오래된 찬장과 레이스 매트',
  'Summer Cool-Pop': '투명한 블루 체어와 기하학적 패턴의 러그',
  'Summer Cool-Hip': '금속 소재의 선반과 미니멀한 조명',
  'Summer Cool-Lovely': '하늘하늘한 시폰 커튼과 화이트 톤의 침실',
  'Summer Cool-Moody': '딥 블루 벽지와 그레이 톤의 벨벳 소파',
  'Summer Cool-Retro': '레트로한 디자인의 하늘색 라디오와 포스터',
  'Autumn Warm-Classic': '고급스러운 가죽 소파와 짙은 월넛 가구',
  'Autumn Warm-Minimal': '베이지 톤의 린넨 소재 가구와 도자기',
  'Autumn Warm-Vintage': '손때 묻은 빈티지 책장과 낡은 양탄자',
  'Autumn Warm-Pop': '오렌지 컬러의 포인트 가구와 민속적인 장식품',
  'Autumn Warm-Hip': '벽돌 벽면과 러프한 가죽 체어',
  'Autumn Warm-Lovely': '포근한 니트 담요와 따뜻한 전구색 조명',
  'Autumn Warm-Moody': '다크 브라운 톤의 서재와 빈티지한 램프',
  'Autumn Warm-Retro': '코듀로이 소재의 소파와 70년대 풍의 벽지',
  'Winter Cool-Classic': '블랙 앤 화이트의 대비가 돋보이는 모던한 거실',
  'Winter Cool-Minimal': '유리 소재의 테이블과 극도로 단순한 가구',
  'Winter Cool-Vintage': '중세풍의 화려한 샹들리에와 무거운 벨벳 커튼',
  'Winter Cool-Pop': '쨍한 핑크색 포인트 소파와 대비가 강한 포스터',
  'Winter Cool-Hip': '그레이 톤의 차가운 금속 소재와 대형 스피커',
  'Winter Cool-Lovely': '새하얀 가구와 반짝이는 크리스탈 소품',
  'Winter Cool-Moody': '와인 빛의 벨벳 커튼과 어두운 톤의 조명',
  'Winter Cool-Retro': '직선적인 형태의 미드센추리 모던 가구',
};

const musicMap: Record<string, string> = {
  'Spring Warm-Classic': '밝고 우아한 모차르트 피아노 협주곡',
  'Spring Warm-Minimal': '청량한 어쿠스틱 기타 연주곡',
  'Spring Warm-Vintage': '따스한 햇살 같은 포크송',
  'Spring Warm-Pop': '경쾌하고 통통 튀는 업템포 팝',
  'Spring Warm-Hip': '세련된 비트의 퓨처 베이스',
  'Spring Warm-Lovely': '달콤한 보이스의 어쿠스틱 팝',
  'Spring Warm-Moody': '나른한 오후의 보사노바',
  'Spring Warm-Retro': '흥겨운 디스코와 시티팝',
  'Summer Cool-Classic': '맑고 깨끗한 쇼팽의 녹턴',
  'Summer Cool-Minimal': '고요하고 정갈한 앰비언트 음악',
  'Summer Cool-Vintage': '몽환적인 드림 팝',
  'Summer Cool-Pop': '시원한 신스 팝',
  'Summer Cool-Hip': '차가운 감성의 일렉트로니카',
  'Summer Cool-Lovely': '투명한 피아노 선율의 이지리스닝',
  'Summer Cool-Moody': '비 오는 날 어울리는 블루스 재즈',
  'Summer Cool-Retro': '80년대 감성의 신스웨이브',
  'Autumn Warm-Classic': '깊이 있는 브람스의 교향곡',
  'Autumn Warm-Minimal': '여백의 미가 느껴지는 피아노 독주곡',
  'Autumn Warm-Vintage': 'LP판의 노이즈가 섞인 올드 팝',
  'Autumn Warm-Pop': '리드미컬한 소울과 펑크',
  'Autumn Warm-Hip': '거친 질감의 로파이 힙합',
  'Autumn Warm-Lovely': '포근한 포크 발라드',
  'Autumn Warm-Moody': '짙은 감성의 재즈 보컬',
  'Autumn Warm-Retro': '70년대 빈티지 록',
  'Winter Cool-Classic': '장엄하고 웅장한 차이코프스키',
  'Winter Cool-Minimal': '극도로 정제된 테크노',
  'Winter Cool-Vintage': '신비로운 분위기의 오페라 아리아',
  'Winter Cool-Pop': '강렬한 베이스의 일렉트로 팝',
  'Winter Cool-Hip': '다크하고 묵직한 드릴 힙합',
  'Winter Cool-Lovely': '맑은 겨울 공기 같은 동화적 발라드',
  'Winter Cool-Moody': '치명적인 분위기의 다크 팝',
  'Winter Cool-Retro': '클래식한 하드 밥 재즈',
};

const photoTipMap: Record<string, string> = {
  'Spring Warm-Classic': '자연광이 잘 드는 창가에서 촬영하세요. 부드러운 미소와 함께 따뜻한 색감을 강조하면 좋습니다.',
  'Spring Warm-Minimal': '하얀 벽을 배경으로 여백을 충분히 두세요. 노란색이나 오렌지색 소품 하나로 포인트를 주면 완벽합니다.',
  'Spring Warm-Vintage': '해 질 녘 골든아워를 활용하세요. 따뜻한 오렌지빛 역광이 당신의 생기를 더욱 돋보이게 합니다.',
  'Spring Warm-Pop': '채도가 높은 벽 앞에서 역동적인 포즈를 취해보세요. 밝은 조명이 당신의 에너지를 잘 담아냅니다.',
  'Spring Warm-Hip': '도시의 거리에서 자연스럽게 걷는 모습을 담으세요. 광각 렌즈를 활용하면 더욱 힙한 무드가 완성됩니다.',
  'Spring Warm-Lovely': '꽃이 가득한 정원에서 촬영하세요. 필터를 사용해 몽글몽글하고 화사한 분위기를 연출하는 것이 팁입니다.',
  'Spring Warm-Moody': '나른한 표정으로 턱을 괴거나 앉아있는 모습을 촬영하세요. 부드러운 조명이 당신의 매력을 극대화합니다.',
  'Spring Warm-Retro': '필름 카메라 특유의 거친 질감을 살려보세요. 원색적인 배경과 함께라면 더욱 레트로한 느낌이 납니다.',
  'Summer Cool-Classic': '깔끔한 실내 공간에서 정갈한 포즈를 취하세요. 실버 액세서리가 반짝이도록 조명을 조절하는 것이 핵심입니다.',
  'Summer Cool-Minimal': '무채색 배경에서 전신 샷을 촬영하세요. 불필요한 장식을 배제하고 선의 아름다움을 강조하는 것이 좋습니다.',
  'Summer Cool-Vintage': '안개 낀 아침이나 비 오는 날의 차분함을 담으세요. 약간의 푸른 기가 도는 필터가 당신과 잘 어울립니다.',
  'Summer Cool-Pop': '수영장이나 해변에서 시원하게 웃는 모습을 촬영하세요. 물보라와 함께 생동감 넘치는 순간을 포착해보세요.',
  'Summer Cool-Hip': '밤거리를 배경으로 플래시를 터뜨려 촬영하세요. 차가운 색감의 조명이 당신의 시크함을 강조해줍니다.',
  'Summer Cool-Lovely': '파스텔 톤의 벽이나 소품을 활용하세요. 자연스러운 웨이브 헤어와 함께 부드러운 눈빛을 보내면 완벽합니다.',
  'Summer Cool-Moody': '어두운 조명 아래에서 흑백 사진에 도전해보세요. 당신의 선명한 이목구비가 더욱 분위기 있게 담깁니다.',
  'Summer Cool-Retro': '네온 사인이 가득한 거리에서 촬영하세요. 푸른빛과 보랏빛이 섞인 필터가 80년대 감성을 자극합니다.',
  'Autumn Warm-Classic': '책이 가득한 서재나 고풍스러운 건물 앞에서 촬영하세요. 지적인 분위기와 함께 무게감 있는 포즈가 어울립니다.',
  'Autumn Warm-Minimal': '갈대밭이나 숲속에서 자연과 어우러진 모습을 담으세요. 자연광 아래에서의 무보정 사진이 가장 아름답습니다.',
  'Autumn Warm-Vintage': '빈티지한 카페의 구석자리에서 나른하게 촬영하세요. 소품을 활용해 스토리가 느껴지는 사진을 만들어보세요.',
  'Autumn Warm-Pop': '화려한 패턴의 배경 앞에서 당당하게 포즈를 취하세요. 당신의 깊은 눈빛이 사진의 주인공이 될 것입니다.',
  'Autumn Warm-Hip': '인더스트리얼한 카페나 거리에서 촬영하세요. 무심한 듯 툭 던지는 시선 처리가 당신의 힙함을 완성합니다.',
  'Autumn Warm-Lovely': '포근한 니트를 입고 카페에서 차를 마시는 모습을 담으세요. 따뜻한 김이 모락모락 피어오르는 찰나가 베스트 샷입니다.',
  'Autumn Warm-Moody': '벽난로 불꽃이나 촛불 조명을 활용하세요. 그림자를 깊게 드리워 당신의 고혹적인 분위기를 살려보세요.',
  'Autumn Warm-Retro': '오래된 레코드 숍이나 중고 서점에서 촬영하세요. 세피아 톤의 필터가 당신의 깊이감을 더해줍니다.',
  'Winter Cool-Classic': '장엄한 건축물을 배경으로 선명한 대비를 강조하세요. 검은색 옷을 입으면 당신의 뚜렷한 존재감이 더욱 돋보입니다.',
  'Winter Cool-Minimal': '극도로 단순한 배경에서 클로즈업 샷을 촬영하세요. 눈동자의 선명함과 입술의 강조가 사진의 포인트입니다.',
  'Winter Cool-Vintage': '오래된 성이나 대리석 배경에서 촬영하세요. 벨벳 소재의 옷을 입으면 당신의 우아함이 극대화됩니다.',
  'Winter Cool-Pop': '쨍한 형광 조명 아래에서 과감한 메이크업을 강조하세요. 글리터를 활용하면 더욱 화려하고 선명한 사진이 완성됩니다.',
  'Winter Cool-Hip': '기하학적인 구조물 앞에서 시크한 표정을 지으세요. 금속 소재의 소품을 활용하면 더욱 테크니컬한 무드가 납니다.',
  'Winter Cool-Lovely': '하얀 눈밭에서 촬영하세요. 추운 날씨에 살짝 붉어진 볼과 반짝이는 눈망울이 당신의 매력 포인트입니다.',
  'Winter Cool-Moody': '깊은 밤, 도심의 야경을 배경으로 촬영하세요. 아웃포커싱 된 빛망울들이 당신의 신비로움을 더해줍니다.',
  'Winter Cool-Retro': '흑백 필름 카메라로 클로즈업 샷을 촬영하세요. 당신의 뚜렷한 선이 예술 작품처럼 담길 것입니다.',
};

const feedStyleMap: Record<string, string> = {
  'Spring Warm-Classic': '따뜻하고 정돈된 톤의 피드. 자연광 아래에서의 일상 사진이 주를 이룹니다.',
  'Spring Warm-Minimal': '화이트 톤에 노란색 포인트가 섞인 깔끔한 피드. 여백이 많은 사진이 특징입니다.',
  'Spring Warm-Vintage': '필름 카메라 느낌의 따뜻한 오렌지 톤 피드. 감성적인 소품 사진이 많습니다.',
  'Spring Warm-Pop': '알록달록하고 생기 넘치는 피드. 통통 튀는 색감의 카페나 전시회 사진이 주를 이룹니다.',
  'Spring Warm-Hip': '트렌디하고 에너제틱한 피드. 거리에서의 일상과 힙한 장소들의 사진이 조화롭습니다.',
  'Spring Warm-Lovely': '핑크와 파스텔 톤의 사랑스러운 피드. 꽃과 풍경, 부드러운 셀카가 가득합니다.',
  'Spring Warm-Moody': '나른하고 부드러운 톤의 피드. 은은한 조명 아래에서의 감성적인 순간들이 담깁니다.',
  'Spring Warm-Retro': '비비드한 색감과 빈티지한 감성이 섞인 피드. 톡톡 튀는 소품과 장소들이 눈에 띕니다.',
  'Summer Cool-Classic': '실버와 블루 톤이 조화로운 우아한 피드. 깔끔하게 정돈된 공간에서의 사진이 많습니다.',
  'Summer Cool-Minimal': '극도로 정제된 화이트와 그레이 톤 피드. 직선적이고 심플한 구도가 돋보입니다.',
  'Summer Cool-Vintage': '빛바랜 파스텔 톤의 몽환적인 피드. 안개 낀 풍경이나 빈티지한 소품들이 담깁니다.',
  'Summer Cool-Pop': '청량한 블루와 네온 파스텔 톤의 피드. 시원한 물가나 여름의 생동감이 느껴집니다.',
  'Summer Cool-Hip': '차가운 금속 질감과 무채색 위주의 힙한 피드. 밤의 도시나 세련된 카페 사진이 특징입니다.',
  'Summer Cool-Lovely': '포근한 화이트와 연한 블루 톤의 피드. 맑고 투명한 느낌의 일상이 가득합니다.',
  'Summer Cool-Moody': '차분한 다크 블루와 흑백이 섞인 감성 피드. 비 오는 날이나 새벽의 정취가 느껴집니다.',
  'Summer Cool-Retro': '퍼플과 민트 톤이 섞인 신스웨이브 감성 피드. 레트로한 야경과 소품들이 가득합니다.',
  'Autumn Warm-Classic': '딥한 브라운과 골드 톤의 고풍스러운 피드. 책, 커피, 오래된 건축물 사진이 많습니다.',
  'Autumn Warm-Minimal': '베이지와 우드 톤의 편안한 피드. 자연스러운 소재와 차분한 일상이 담깁니다.',
  'Autumn Warm-Vintage': '세피아 톤의 고전적인 피드. 낡은 책, 빈티지 카페, 가을 풍경이 조화롭습니다.',
  'Autumn Warm-Pop': '오렌지와 그린 톤의 개성 있는 피드. 독특한 패턴이나 강렬한 색감의 공간이 돋보입니다.',
  'Autumn Warm-Hip': '거칠고 자유로운 톤의 피드. 인더스트리얼한 장소와 무심한 일상 사진이 특징입니다.',
  'Autumn Warm-Lovely': '따스한 전구색 조명 톤의 포근한 피드. 니트, 홈카페, 반려견과의 일상이 가득합니다.',
  'Autumn Warm-Moody': '어둡고 깊이 있는 톤의 시네마틱 피드. 그림자가 강조된 분위기 있는 순간들이 담깁니다.',
  'Autumn Warm-Retro': '채도가 높고 따뜻한 70년대 감성 피드. 레트로한 패션과 장소들이 돋보입니다.',
  'Winter Cool-Classic': '화이트와 블랙의 대비가 명확한 고급스러운 피드. 직선적인 미학과 선명한 색감이 특징입니다.',
  'Winter Cool-Minimal': '무채색 위주의 차가운 미니멀 피드. 불필요한 정보가 배제된 정갈한 사진들이 많습니다.',
  'Winter Cool-Vintage': '다크 퍼플과 실버가 섞인 신비로운 피드. 고딕 양식의 건축물이나 클래식한 소품이 담깁니다.',
  'Winter Cool-Pop': '강렬한 핑크와 블루가 대비되는 화려한 피드. 네온 사인과 팝한 메이크업 사진이 가득합니다.',
  'Winter Cool-Hip': '블랙과 형광 포인트가 섞인 테크니컬 피드. 힙한 스트릿 패션과 독특한 건축물 사진이 많습니다.',
  'Winter Cool-Lovely': '아이시한 핑크와 화이트 톤의 맑은 피드. 겨울의 투명함과 사랑스러운 일상이 조화롭습니다.',
  'Winter Cool-Moody': '딥한 레드와 블랙 톤의 고혹적인 피드. 와인, 야경, 치명적인 분위기의 셀카가 가득합니다.',
  'Winter Cool-Retro': '대비가 강한 흑백과 블루 톤의 피드. 미드센추리 모던 가구와 세련된 레트로 소품이 담깁니다.',
};

const mediaGenreMap: Record<string, string> = {
  'Spring Warm-Classic': '로맨스 · 코미디 — 설레는 시작이 가득한 몽글몽글한 이야기',
  'Spring Warm-Minimal': '일상 · 치유 — 군더더기 없이 깔끔한 감동의 에세이',
  'Spring Warm-Vintage': '드라마 · 역사 — 빛바랜 사진첩 같은 아련한 대서사시',
  'Spring Warm-Pop': '판타지 · 뮤지컬 — 화려한 색감이 눈을 사로잡는 마법 같은 영화',
  'Spring Warm-Hip': '액션 · 모험 — 톡톡 튀는 에너지로 무장한 트렌디한 시리즈',
  'Spring Warm-Lovely': '로맨틱 코미디 · 가족 — 따스한 온기로 가득한 사랑스러운 소설',
  'Spring Warm-Moody': '미스터리 · 멜로 — 비밀스러운 분위기가 감도는 나른한 수사극',
  'Spring Warm-Retro': '음악 · 청춘 — 옛 레코드 판의 지지직거림이 들리는 하이틴물',
  'Summer Cool-Classic': '멜로 · 드라마 — 맑고 투명한 유리 구슬 같은 정통 멜로',
  'Summer Cool-Minimal': '건축 · 다큐멘터리 — 선과 여백의 미학을 담은 시각적 기록물',
  'Summer Cool-Vintage': '판타지 · 미스터리 — 안갯속을 걷는 듯한 몽환적인 스릴러',
  'Summer Cool-Pop': 'SF · 코미디 — 청량한 색감의 시각적 즐거움이 가득한 영상미',
  'Summer Cool-Hip': '범죄 · 스릴러 — 차가운 도시의 공기를 담은 감각적인 느와르',
  'Summer Cool-Lovely': '동화 · 로맨스 — 파스텔 톤의 꿈속을 헤매는 듯한 이야기',
  'Summer Cool-Moody': '공포 · 서스펜스 — 소리 없는 비명이 울려 퍼지는 서늘한 심리극',
  'Summer Cool-Retro': '시티팝 · 음악드라마 — 푸른 밤의 도시를 배경으로 한 감성 여행',
  'Autumn Warm-Classic': '역사 · 드라마 — 묵직한 무게감이 느껴지는 정갈한 시대극',
  'Autumn Warm-Minimal': '여행 · 에세이 — 자연의 소리에 귀 기울이는 철학적인 기록',
  'Autumn Warm-Vintage': '서부극 · 모험 — 거친 대지의 숨결이 느껴지는 클래식한 여정',
  'Autumn Warm-Pop': '컬트 · 판타지 — 독특한 상상력이 돋보이는 키치한 비주얼',
  'Autumn Warm-Hip': '느와르 · 액션 — 거친 질감 속에 숨겨진 뜨거운 우정의 서사',
  'Autumn Warm-Lovely': '일상 · 요리 — 고소한 빵 굽는 냄새가 나는 따스한 만화',
  'Autumn Warm-Moody': '스릴러 · 드라마 — 타오르는 장작불처럼 깊이 있는 심리 수사물',
  'Autumn Warm-Retro': '재즈 · 멜로 — LP 판의 노이즈마저 아름다운 고전 로맨스',
  'Winter Cool-Classic': '오페라 · 공연실황 — 압도적인 규모와 카리스마의 무대 예술',
  'Winter Cool-Minimal': 'SF · 철학 — 극도의 정제된 미학으로 그려낸 미래의 고독',
  'Winter Cool-Vintage': '고딕 · 호러 — 어둠 속에서도 빛나는 우아한 공포의 대작',
  'Winter Cool-Pop': '사이버펑크 · 액션 — 화려한 네온사인 아래 펼쳐지는 비정한 세계',
  'Winter Cool-Hip': '테크노 · 스릴러 — 차가운 비트와 긴장감이 흐르는 감각적 영상',
  'Winter Cool-Lovely': '겨울왕국 · 애니메이션 — 얼음 결정처럼 빛나는 순수한 기적의 서사',
  'Winter Cool-Moody': '뱀파이어 · 로맨스 — 치명적이고 고혹적인 불멸의 사랑 이야기',
  'Winter Cool-Retro': '느와르 · 미스터리 — 흑백 필름 위로 흐르는 고독한 탐정 소설',
};

const makeupMap: Record<string, string> = {
  'Spring Warm-Classic': '베이스는 촉촉하고 투명하게 표현, 아이라인은 얇고 선명하게 그리고 피치 브라운 섀도우로 음영을 줘요. 블러셔는 살구색으로 광대뼈 위쪽에 사선으로, 립은 맑은 코랄 레드 립스틱으로 매트하게 마무리.',
  'Spring Warm-Minimal': '베이스는 맑고 깨끗한 글로우 제형으로, 아이라인은 꼬리만 살짝 빼고 베이지 섀도우로 가볍게 정리해요. 블러셔는 연한 복숭아 빛으로 볼 중앙에 둥글게, 립은 살구빛 틴트 립밤으로 촉촉하게 마무리.',
  'Spring Warm-Vintage': '베이스는 자연스러운 피부 결을 살린 내추럴 피니시, 브라운 펜슬로 아이라인을 뭉개듯 그리고 오렌지 브라운 섀도우를 넓게 펴 발라요. 블러셔는 테라코타 색상으로 광대 전체에, 립은 오렌지 칠리 컬러의 벨벳 틴트로 마무리.',
  'Spring Warm-Pop': '베이스는 보송하고 화사하게, 노란색이나 연두색 섀도우로 눈 앞머리에 포인트를 주고 속눈썹을 강조해요. 블러셔는 쨍한 자몽색으로 광대 중앙에 넓게, 립은 생기 넘치는 캔디 핑크 글로스로 촉촉하게 마무리.',
  'Spring Warm-Hip': '베이스는 건강미 넘치는 세미 글로우, 길게 뺀 캣츠 아이라인에 골드 쉬머 섀도우를 얹어 화려함을 더해요. 블러셔는 브론즈 컬러로 쉐딩 겸용으로 사용하고, 립은 투명한 립 오일로 볼륨감 있게 마무리.',
  'Spring Warm-Lovely': '베이스는 뽀얗고 몽글몽글한 벨벳 제형, 아이라인은 브라운으로 짧게 그리고 핑크 코랄 섀도우와 글리터를 눈 밑에 콕 찍어줘요. 블러셔는 옅은 딸기우유 색으로 애플존에 넓게, 립은 복숭아색 워터 틴트로 그라데이션 마무리.',
  'Spring Warm-Moody': '베이스는 매끄러운 새틴 광채, 딥한 코퍼 브라운 섀도우로 그윽한 눈매를 만들고 속눈썹을 바짝 올려요. 블러셔는 뮤트한 피치 색상으로 볼 외곽부터 안쪽으로, 립은 차분한 브릭 오렌지 컬러의 새틴 립스틱으로 마무리.',
  'Spring Warm-Retro': '베이스는 완벽한 커버력의 매트 피니시, 눈 앞머리에 하이라이트를 주고 그린이나 오렌지 섀도우로 컬러 포인트를 줘요. 블러셔는 오렌지 빛으로 관자놀이 아래쪽에, 립은 선명한 토마토 레드 립스틱을 꽉 채워 발라 마무리.',
  'Summer Cool-Classic': '베이스는 화사하고 깔끔하게 정리, 아이라인은 네이비나 차콜로 얇게 그리고 실버 펄이 섞인 핑크 섀도우로 음영을 줘요. 블러셔는 연한 보랏빛 라벤더로 광대 위쪽에, 립은 차가운 로즈 핑크 립스틱으로 차분하게 마무리.',
  'Summer Cool-Minimal': '베이스는 속광이 비치는 시어한 마무리, 아이라인 없이 마스카라로 속눈썹만 강조하고 아이시한 핑크 섀도우를 펴 발라요. 블러셔는 아주 연한 핑크로 얼굴 외곽에 살짝, 립은 맑은 라즈베리 색상 틴트 립밤으로 마무리.',
  'Summer Cool-Vintage': '베이스는 보송한 매트 피니시, 회갈색 섀도우로 눈매를 깊게 잡고 언더 라인에 펄감을 살짝 얹어줘요. 블러셔는 톤 다운된 말린 장미색으로 볼 아래쪽에 넓게, 립은 자두색 벨벳 틴트를 스머징하여 오묘하게 마무리.',
  'Summer Cool-Pop': '베이스는 아주 밝고 깨끗하게, 블루나 퍼플 컬러 마스카라로 속눈썹에 포인트를 주고 눈두덩엔 은색 글리터를 넓게 발라요. 블러셔는 선명한 핫핑크로 애플존에 톡톡, 립은 형광기 도는 마젠타 핑크 글로스로 화려하게 마무리.',
  'Summer Cool-Hip': '베이스는 차가운 톤의 새틴 피니시, 눈꼬리를 날카롭게 뺀 볼드한 아이라인과 그레이시 퍼플 섀도우를 믹스해요. 블러셔는 라벤더 색상을 사선으로 강하게, 립은 딥한 퍼플 레드 컬러의 촉촉한 립스틱으로 시크하게 마무리.',
  'Summer Cool-Lovely': '베이스는 투명하고 맑은 핑크 톤, 아이라인은 생략하고 속눈썹만 길게 연출한 뒤 연보라 섀도우를 눈 밑까지 연결해요. 블러셔는 쿨 핑크 컬러로 눈 아래 가까이에, 립은 맑은 딸기우유 틴트 글로스로 입체감 있게 마무리.',
  'Summer Cool-Moody': '베이스는 우아한 광택의 글로우 피니시, 모브 퍼플 섀도우로 눈 전체에 깊은 음영을 주고 점막만 채우듯 아이라인을 그려요. 블러셔는 보랏빛이 섞인 로즈 색상으로 공식 아래에, 립은 딥한 로즈 우드 컬러의 새틴 틴트로 그윽하게 마무리.',
  'Summer Cool-Retro': '베이스는 완벽하게 커버된 뽀얀 매트, 블루 섀도우를 눈두덩 중앙에 포인트로 바르고 인조 속눈썹으로 눈매를 강조해요. 블러셔는 마젠타 핑크를 광대 외곽부터, 립은 쨍한 푸시아 핑크 립스틱을 풀 립으로 채워 마무리.',
  'Autumn Warm-Classic': '베이스는 결점 없는 세미매트, 다크 브라운 섀도우로 정갈한 음영을 잡고 아이라인은 점막만 꼼꼼히 채워요. 블러셔는 차분한 머드 베이지 컬러로 광대뼈를 감싸듯, 립은 말린 장미색 리퀴드 립으로 밀착력 있게 마무리.',
  'Autumn Warm-Minimal': '베이스는 건강한 피부 톤을 살린 자연스러운 마무리, 눈가엔 샌드 베이지 섀도우로 혈색만 주고 마스카라로 선명하게 정리해요. 블러셔는 베이지 피치 색상으로 광대 중앙에 가볍게, 립은 누드 브라운 계열의 매트 틴트로 마무리.',
  'Autumn Warm-Vintage': '베이스는 살짝 거친 듯한 내추럴 피니시, 카키와 브라운 섀도우를 믹스해 스모키하게 연출하고 언더에도 깊게 음영을 줘요. 블러셔는 짙은 오렌지 브라운으로 볼 전체에, 립은 딥한 브릭 레드 컬러의 벨벳 립스틱으로 투박하게 마무리.',
  'Autumn Warm-Pop': '베이스는 화사한 옐로우 톤 글로우, 번트 오렌지 섀도우를 넓게 바르고 눈꼬리 끝에만 쨍한 옐로우 펄로 포인트를 줘요. 블러셔는 황토빛 도는 머스타드 옐로우로 애플존 옆쪽에, 립은 쨍한 오렌지 브라운 글로스로 입체감 있게 마무리.',
  'Autumn Warm-Hip': '베이스는 태닝한 듯 건강한 새틴 마무리, 블랙 젤 아이라이너로 선을 강조하고 골드와 브론즈 섀도우를 겹겹이 쌓아 올려요. 블러셔는 테라코타 색상으로 얼굴 외곽에 쉐딩처럼, 립은 딥한 초콜릿 브라운 매트 립으로 강렬하게 마무리.',
  'Autumn Warm-Lovely': '베이스는 따뜻한 톤의 뽀송한 벨벳, 톤 다운된 핑크 브라운 섀도우로 눈매를 부드럽게 감싸고 애교살을 강조해요. 블러셔는 차분한 인디 핑크로 볼 중앙에 은은하게, 립은 촉촉한 무화과 색상 립스틱으로 생기 있게 마무리.',
  'Autumn Warm-Moody': '베이스는 고급스러운 광채의 새틴 피니시, 딥한 버건디와 브라운을 섞어 고혹적인 눈매를 만들고 속눈썹을 풍성하게 연출해요. 블러셔는 짙은 로즈 브라운 컬러로 광대 옆면에, 립은 딥한 와인 레드 립스틱을 스머징해서 마무리.',
  'Autumn Warm-Retro': '베이스는 완벽한 커버의 매트 마무리, 카키색 아이라이너로 점막을 채우고 머스타드와 브라운 섀도우를 믹스해 눈매를 강조해요. 블러셔는 황토빛 오렌지로 공식 아래에, 립은 톤 다운된 오렌지 레드 컬러를 매트하게 채워 마무리.',
  'Winter Cool-Classic': '베이스는 아주 깨끗하고 하얀 매트 피니시, 블랙 붓펜 라이너로 꼬리를 날카롭게 빼고 은색 펄이 가득한 섀도우를 얹어줘요. 블러셔는 연한 라벤더 핑크로 광대 중앙에만 살짝, 립은 쨍한 트루 레드 립스틱으로 립 라인을 살려 마무리.',
  'Winter Cool-Minimal': '베이스는 투명한 느낌의 맑은 새틴 마무리, 아이라인 없이 마스카라만 꼼꼼히 하고 투명한 글리터 섀도우로 눈매를 밝혀줘요. 블러셔는 쿨한 화이트 핑크로 공식 전체에 화사함을 더하고, 립은 맑은 버건디 색상 립 오일로 마무리.',
  'Winter Cool-Vintage': '베이스는 뽀얗고 보송한 벨벳 피니시, 딥 퍼플과 블랙 섀도우를 믹스해 스모키하게 연출하고 언더에 은색 눈물 파츠를 붙여줘요. 블러셔는 딥한 모브 핑크로 광대 아래쪽부터 사선으로, 립은 검붉은 핏빛의 틴트를 입 안쪽부터 채워 마무리.',
  'Winter Cool-Pop': '베이스는 아주 화사하고 쨍한 매트 마무리, 네온 핑크나 블루 아이라이너로 과감하게 선을 그리고 눈두덩엔 오팔 펄을 넓게 발라요. 블러셔는 형광기 도는 핫핑크로 애플존 상단에, 립은 쨍한 체리 핑크 글로스로 캔디처럼 마무리.',
  'Winter Cool-Hip': '베이스는 건강한 광채의 새틴 마무리, 블랙 젤 라이너로 눈매를 두껍고 강렬하게 잡고 눈썹산을 높여서 그려줘요. 블러셔는 채도 낮은 퍼플 그레이 컬러로 쉐딩처럼 사용하고, 립은 블랙 버건디 컬러의 매트 립스틱으로 강하게 마무리.',
  'Winter Cool-Lovely': '베이스는 하얗고 투명한 글로우 피니시, 아이라인 대신 쿨 핑크 섀도우를 넓게 바르고 속눈썹 끝에만 화이트 펄을 얹어줘요. 블러셔는 베이비 핑크 색상을 눈 아래 아주 가깝게, 립은 투명한 핑크 펄이 섞인 립 글로스로 맑게 마무리.',
  'Winter Cool-Moody': '베이스는 매끄럽고 우아한 광택의 새틴 마무리, 딥 버건디 섀도우로 눈매를 고혹적으로 연출하고 블랙 아이라이너로 눈꼬리를 길게 빼줘요. 블러셔는 딥 로즈 퍼플로 광대 옆면에 깊게, 립은 다크한 플럼 레드 립스틱을 꽉 채워 발라 마무리.',
  'Winter Cool-Retro': '베이스는 결점 없는 도자기 매트 마무리, 화이트 아이라이너로 눈두덩에 선을 긋고 블루와 실버 섀도우를 기하학적으로 믹스해요. 블러셔는 선명한 퍼플 핑크로 관자놀이 쪽으로, 립은 쨍한 마젠타 립스틱을 풀 립으로 채워 마무리.',
};

const fashionMap: Record<string, string> = {
  'Spring Warm-Classic': '베이지 톤의 테일러드 자켓에 아이보리 슬랙스를 매치하세요. 소재는 탄탄한 코튼이나 고급스러운 울 실크 위주로, 포인트는 골드 버클 벨트나 진주 목걸이로 줘요. 전체적으로 크림과 카멜 색감으로 클래식한 무드를 완성하세요.',
  'Spring Warm-Minimal': '화이트 실크 블라우스에 일자 핏 연청 데님을 매치하세요. 소재는 가볍고 매끄러운 텐셀이나 고밀도 면 위주로, 포인트는 심플한 가죽 시계나 실버 링으로 줘요. 전체적으로 화이트와 뉴트럴 톤으로 정갈하게 연출하세요.',
  'Spring Warm-Vintage': '플라워 패턴의 롱 원피스에 오버핏 가디건을 매치하세요. 소재는 성글게 짠 니트나 워싱된 린넨 위주로, 포인트는 빈티지한 브라운 가죽 가방이나 스카프로 줘요. 전체적으로 톤 다운된 웜 컬러로 따뜻하게 연출하세요.',
  'Spring Warm-Pop': '채도 높은 옐로우 크롭 티셔츠에 비비드한 그린 컬러 스커트를 매치하세요. 소재는 신축성 있는 골지 니트나 가공된 나일론 위주로, 포인트는 컬러풀한 비즈 액세서리나 투박한 운동화로 줘요. 알록달록한 원색 대비를 즐기세요.',
  'Spring Warm-Hip': '루즈한 핏의 그래픽 티셔츠에 카고 팬츠를 매치하세요. 소재는 바스락거리는 나일론이나 탄탄한 데님 위주로, 포인트는 볼드한 실버 체어 목걸이나 비니로 줘요. 옐로우와 카키를 섞어 에너제틱하게 연출하세요.',
  'Spring Warm-Lovely': '퍼프 소매의 파스텔 톤 블라우스에 미니 스커트를 매치하세요. 소재는 하늘하늘한 시폰이나 레이스 패브릭 위주로, 포인트는 리본 핀이나 귀여운 플랫슈즈로 줘요. 전체적으로 부드러운 웜 핑크 톤으로 사랑스럽게 완성하세요.',
  'Spring Warm-Moody': '새틴 소재의 슬립 원피스에 얇은 린넨 자켓을 어깨에 걸치세요. 소재는 매끄러운 실크나 비침이 있는 오간자 위주로, 포인트는 앤티크한 골드 귀걸이나 뱅글로 줘요. 엠버와 골드 색감으로 깊이 있는 분위기를 만드세요.',
  'Spring Warm-Retro': '도트 패턴의 셔츠에 하이웨이스트 부츠컷 팬츠를 매치하세요. 소재는 빳빳한 코듀로이나 광택감 있는 새틴 위주로, 포인트는 커다란 사각 프레임 선글라스나 반다나로 줘요. 70년대 풍의 비비드 웜 컬러로 개성을 표현하세요.',
  'Summer Cool-Classic': '네이비 컬러의 셔츠 원피스에 화이트 트렌치 코트를 매치하세요. 소재는 매끈한 포플린 면이나 고급스러운 실크 위주로, 포인트는 실버 시계나 진주 귀걸이로 줘요. 전체적으로 블루와 그레이 색감으로 지적인 무드를 완성하세요.',
  'Summer Cool-Minimal': '회색 캐시미어 니트에 화이트 와이드 팬츠를 매치하세요. 소재는 부드러운 울이나 가벼운 실크 혼방 위주로, 포인트는 심플한 가죽 가방이나 얇은 실버 목걸이로 줘요. 무채색 베이스에 쿨 블루 한 방울로 깨끗하게 연출하세요.',
  'Summer Cool-Vintage': '자수 장식이 들어간 빈티지 블라우스에 미디 길이의 체크 스커트를 매치하세요. 소재는 거친 질감의 리넨이나 얇은 벨벳 위주로, 포인트는 앤티크한 실버 브로치나 베레모로 줘요. 바랜 듯한 쿨 컬러로 아련한 분위기를 연출하세요.',
  'Summer Cool-Pop': '민트 컬러의 오버핏 티셔츠에 실버 스팽글 스커트를 매치하세요. 소재는 메탈릭한 패브릭이나 가벼운 나일론 위주로, 포인트는 키치한 아크릴 액세서리나 어글리 슈즈로 줘요. 캔디 컬러의 쿨 톤 대비로 청량감을 극대화하세요.',
  'Summer Cool-Hip': '크롭 스타일의 스트라이프 셔츠에 와이드 블랙 데님을 매치하세요. 소재는 빈티지한 느낌의 워싱 코튼이나 바스락거리는 기능성 원단 위주로, 포인트는 실버 체인 벨트나 헤드폰으로 줘요. 블루와 차콜로 쿨한 스트릿 감성을 연출하세요.',
  'Summer Cool-Lovely': '레이스 칼라가 돋보이는 소라색 원피스에 얇은 가디건을 매치하세요. 소재는 부드러운 코튼이나 비침이 있는 시폰 위주로, 포인트는 리본 장식 머리띠나 화이트 양말로 줘요. 전체적으로 맑은 쿨 파스텔 톤으로 청순하게 완성하세요.',
  'Summer Cool-Moody': '실크 소재의 네이비 블라우스에 블랙 머메이드 스커트를 매치하세요. 소재는 몸의 곡선을 살리는 새틴이나 고급스러운 트위드 위주로, 포인트는 볼드한 실버 이어링이나 클러치백으로 줘요. 자정과 새벽 사이의 쿨한 감성을 담으세요.',
  'Summer Cool-Retro': '비비드한 퍼플 가디건에 체크무늬 미니 스커트를 매치하세요. 소재는 폭신한 앙고라 니트나 광택 있는 에나멜 위주로, 포인트는 화이트 선글라스나 커다란 링 귀걸이로 줘요. 80년대 신스 팝이 연상되는 화려한 쿨 컬러를 즐기세요.',
  'Autumn Warm-Classic': '다크 브라운 톤의 트위드 자켓에 아이보리 터틀넥 니트를 매치하세요. 소재는 두께감 있는 울이나 거친 질감의 트위드 위주로, 포인트는 가죽 스트랩 시계나 골드 코인 목걸이로 줘요. 전체적으로 브릭과 올리브 색감으로 지적인 무드를 연출하세요.',
  'Autumn Warm-Minimal': '오버핏 베이지 트렌치 코트에 블랙 와이드 슬랙스를 매치하세요. 소재는 탄탄한 가르바딘 원단이나 부드러운 코튼 위주로, 포인트는 짙은 갈색 가죽 벨트나 심플한 토트백으로 줘요. 어스톤 컬러와 간결한 실루엣으로 승부하세요.',
  'Autumn Warm-Vintage': '코듀로이 셔츠에 에스닉한 패턴의 롱 스커트를 매치하세요. 소재는 도톰한 코듀로이나 자수가 놓인 빈티지 패브릭 위주로, 포인트는 오래된 느낌의 가죽 가방이나 스웨이드 부츠로 줘요. 세월의 흔적이 느껴지는 깊은 웜 컬러로 연출하세요.',
  'Autumn Warm-Pop': '강렬한 오렌지 니트에 레오파드 패턴의 미니 스커트를 매치하세요. 소재는 볼륨감 있는 퍼나 거친 질감의 자카드 위주로, 포인트는 볼드한 골드 체인 목걸이나 독특한 선글라스로 줘요. 에스닉하면서도 팝한 가을 컬러의 조화를 보여주세요.',
  'Autumn Warm-Hip': '카키색 항공 점퍼에 빈티지한 카고 스웨트 팬츠를 매치하세요. 소재는 광택 없는 나일론이나 탄탄한 테리 원단 위주로, 포인트는 큰 버클 가죽 벨트나 뉴스보이 캡으로 줘요. Industrial한 카키와 다크 브라운으로 힙한 무드를 완성하세요.',
  'Autumn Warm-Lovely': '포근한 니트 가디건에 체크무늬 플레어 스커트를 매치하세요. 소재는 몽글몽글한 모헤어나 부드러운 코튼 위주로, 포인트는 리본 장식 가죽 로퍼나 니트 타이로 줘요. 가을 햇살처럼 따뜻한 핑크와 브라운으로 사랑스럽게 연출하세요.',
  'Autumn Warm-Moody': '블랙 벨벳 원피스에 롱 가죽 코트를 매치하세요. 소재는 무게감 있는 벨벳이나 매끄러운 천연 가죽 위주로, 포인트는 골드 프레임의 빈티지 귀걸이나 롱 부츠로 줘요. 타오르는 모닥불처럼 깊고 어두운 웜 톤의 매력을 발산하세요.',
  'Autumn Warm-Retro': '하이넥 니트에 오렌지 컬러의 와이드 팬츠를 매치하세요. 소재는 복슬복슬한 텍스처의 울이나 단단한 코튼 가바딘 위주로, 포인트는 오렌지색 선글라스나 커다란 헤드폰으로 줘요. 70년대 소울 음악이 연상되는 빈티지 웜 컬러를 즐기세요.',
  'Winter Cool-Classic': '블랙 테일러드 롱 코트에 화이트 셔츠와 슬랙스를 매치하세요. 소재는 광택 없는 프리미엄 울이나 빳빳한 팝린 면 위주로, 포인트는 볼드한 실버 펜던트나 블랙 가죽 장갑으로 줘요. 화이트와 블랙의 극명한 대비로 압도적인 아우라를 만드세요.',
  'Winter Cool-Minimal': '블랙 목폴라 니트에 그레이 와이드 슬랙스를 매치하세요. 소재는 군더더기 없는 캐시미어 니트나 매끄러운 울 수트 패브릭 위주로, 포인트는 미니멀한 실버 시계나 가죽 벨트로 줘요. 무채색으로 정제된 차가운 도시 무드를 완성하세요.',
  'Winter Cool-Vintage': '블랙 레이스 블라우스에 가죽 미니 스커트를 매치하세요. 소재는 빳빳한 천연 가죽이나 비침이 있는 레이스, 벨벳 위주로, 포인트는 화려한 샹들리에 귀걸이나 망사 스타킹으로 줘요. 차가운 고딕 감성이 느껴지는 딥 쿨 컬러로 연출하세요.',
  'Winter Cool-Pop': '메탈릭한 실버 패딩에 블랙 나일론 팬츠를 매치하세요. 소재는 반짝이는 시퀸이나 가벼운 기능성 나일론 위주로, 포인트는 네온 컬러의 비니나 선글라스로 줘요. 고채도의 쿨 톤 컬러와 인공적인 질감의 조화로 팝한 매력을 보여주세요.',
  'Winter Cool-Hip': '오버핏 블랙 가죽 자켓에 헐렁한 트레이닝 팬츠를 매치하세요. 소재는 광택이 강한 레더나 탄탄한 코튼 테리 위주로, 포인트는 두꺼운 실버 체인 목걸이나 비니로 줘요. 블랙과 네온 실버로 테크니컬하고 힙한 무드를 완성하세요.',
  'Winter Cool-Lovely': '화이트 트위드 셋업에 블랙 리본 장식을 매치하세요. 소재는 결이 살아있는 트위드나 부드러운 밍크 퍼 위주로, 포인트는 진주 장식 머리띠나 반짝이는 보석 구두로 줘요. 눈부신 겨울 아침처럼 깨끗하고 사랑스러운 쿨 톤 무드를 즐기세요.',
  'Winter Cool-Moody': '롱 블랙 드레스에 볼륨감 있는 인조 모피 코트를 매치하세요. 소재는 부드러운 퍼나 몸에 감기는 실크 위주로, 포인트는 다이아몬드처럼 빛나는 드롭 귀걸이나 클러치로 줘요. 심연의 밤처럼 차갑고 치명적인 분위기를 연출하세요.',
  'Winter Cool-Retro': '블루 컬러의 벨벳 자켓에 블랙 스키니 팬츠를 매치하세요. 소재는 광택이 화려한 벨벳이나 빳빳한 에나멜 패브릭 위주로, 포인트는 커다란 화이트 프레임 선글라스나 볼드한 링 귀걸이로 줘요. 미드센추리 모던 감성의 차가운 레트로 컬러를 즐기세요.',
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
      makeupGuide: makeupMap[id],
      fashionGuide: fashionMap[id],
      perfumeGuide: perfumeMap[colorKey as PersonalColor],
      weather: weatherMap[id],
      interior: interiorMap[id],
      music: musicMap[id],
      photoTip: photoTipMap[id],
      feedStyle: feedStyleMap[id],
      mediaGenre: mediaGenreMap[id],
      colors: paletteMap[id],
    });
    aestheticIdx++;
  }
  colorIdx++;
}
