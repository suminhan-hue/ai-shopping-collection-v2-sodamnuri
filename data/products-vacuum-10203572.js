// User: 10203572 = "catlury" (남, 33세, 원룸/오피스텔 10평대, 1인 — 부모/형제와 별거)
// 행동: 최근 30일 "먼지없는" 키워드 집착 (베개커버/쿠션/러그/소파커버 모두 PDP 다회 조회)
//      iv11 무선청소기 (14.9만, 핸디 스틱 원룸용) PDP 6회 반복 조회 → 강한 구매 의도
// 페르소나: 알러지 민감 + 1인 원룸 자취 → 가성비 + 소형 + UV살균/먼지 케어 기능 우선
// 추출일: 2026-04-27 (최근 7일 인기 상품 기준, 카테고리별 scrap_users 정렬 후 페르소나 큐레이션)
//
// Figma 키워드(=섹션명)는 사용자가 디자인에 셋팅한 그대로:
//   1) 로봇 청소기   2) 무선 스틱청소기   3) 침구·매트 청소기

window.UT_PRODUCTS_VACUUM = {
  user: {
    id: 10203572,
    nickname: "catlury",
    sex: "남",
    age: 33,
    residence: "원룸/오피스텔 10평대",
    family: "1인 (부모/형제 별거)",
    persona: "알러지 민감 1인 자취 — '먼지없는'·UV살균·소형 가성비"
  },

  // AI 메시지 — 기존 디자인의 ai-message-card에 매핑
  ai_messages: {
    title: "catlury님 관심사에 맞는 청소기 모음",
    body: "최근 '먼지없는' 패브릭을 자주 보셨고\n원룸용 무선청소기에 관심이 많으셔서 골라봤어요",
    history_text: "30명이 검색했어요"
  },

  // 3개 카테고리 컬렉션 (각 6개 = product-row 3 × 2 grid)
  collections: [
    {
      // 섹션 1: 로봇 청소기 — 1인 원룸 페르소나 보정 (가성비 + 소형 + 인기)
      name: "로봇 청소기",
      products: [
        { product_id: 2948995, brand: "LG전자",        name: "LG 코드제로 R5 올인원타워 로봇청소기 R585WKA1", price: 554008, review_avg: 4.8,  review_count: 45,  wish_count: 2056, image_url: "https://prs.ohou.se/apne2/any/uploads/productions/v1-265296713838592.jpg",          highlight: "올인원 타워" },
        { product_id: 727730,  brand: "레노버",        name: "레노버 프리미엄 로봇청소기 PRO",                  price: 179000, review_avg: 4.9,  review_count: 42,  wish_count: 831,  image_url: "https://image.ohousecdn.com/i/bucketplace-v2-development/uploads/productions/161473910184758331.jpg", highlight: "원룸 가성비" },
        { product_id: 3678386, brand: "드리미",        name: "L10s Plus 올인원 로봇청소기",                     price: 399000, review_avg: 5.0,  review_count: 20,  wish_count: 132,  image_url: "https://prs.ohouse.com/apne2/any/uploads/productions/v1-442155548151872.jpg",                       highlight: "물걸레 동시" },
        { product_id: 3966444, brand: "홈리아",        name: "스마트 로봇청소기 더스트봇 LDS센서 올인원 클린스테이션",  price: 219800, review_avg: 0.0,  review_count: 0,   wish_count: 56,   image_url: "https://prs.ohouse.com/apne2/any/uploads/productions/v1-471953363308544.jpg",                       highlight: "AI 어플 연동" },
        { product_id: 2079035, brand: "LG전자",        name: "LG 오브제컬렉션 인공지능 물걸레 로봇청소기 MO972WA 카밍베이지", price: 497007, review_avg: 5.0, review_count: 2, wish_count: 292, image_url: "https://image.ohousecdn.com/i/bucketplace-v2-development/uploads/productions/168688020710447020.jpg", highlight: "물걸레 전용" },
        { product_id: 2723443, brand: "한경희생활과학", name: "한경희 창문 로봇청소기 유리창 베란다 청소",        price: 189000, review_avg: 4.86, review_count: 140, wish_count: 1881, image_url: "https://prs.ohouse.com/apne2/any/uploads/productions/v1-427439276699712.png",                       highlight: "창문 전용" }
      ]
    },
    {
      // 섹션 2: 무선 스틱청소기 — 가장 강한 의도 (iv11 6회 PDP), 원룸/자취/핸디 키워드 우선
      name: "무선 스틱청소기",
      products: [
        { product_id: 1404699, brand: "캐치웰",  name: "오딜 혜택가 24.5만! CX PRO 매직타워 N 자동먼지비움 클린스테이션 무선청소기", price: 299000, review_avg: 4.87, review_count: 1825,  wish_count: 10871, image_url: "https://prs.ohouse.com/apne2/any/uploads/productions/v1-484932152119424.jpg", highlight: "자동 먼지비움" },
        { product_id: 3563528, brand: "클래파",  name: "300g 초경량 자동먼지비움 BLDC 무선청소기 + 물걸레키트",                       price: 158000, review_avg: 4.81, review_count: 897,   wish_count: 5851,  image_url: "https://prs.ohouse.com/apne2/any/uploads/productions/v1-484343807451200.jpg", highlight: "300g 초경량" },
        { product_id: 555414,  brand: "모온",    name: "오비큠 무선청소기 누적 50,224개 판매 (사은품 증정)",                          price: 259000, review_avg: 4.81, review_count: 14129, wish_count: 81522, image_url: "https://prs.ohou.se/apne2/any/uploads/productions/v1-348010640167040.jpg",  highlight: "베스트셀러" },
        { product_id: 3412109, brand: "홈리아",  name: "차이슨 무선청소기 저소음 셀프 스탠딩 원룸 진공 가벼운 핸디 자취방 청소기",      price:  99800, review_avg: 4.87, review_count: 686,   wish_count: 5047,  image_url: "https://prs.ohouse.com/apne2/any/uploads/productions/v1-402990126272640.jpg", highlight: "원룸 핸디" },
        { product_id: 458058,  brand: "보아르",  name: "포스D14 저소음 진공 셀프 스탠딩 원룸 무선 청소기",                            price:  94000, review_avg: 4.8,  review_count: 10042, wish_count: 65063, image_url: "https://prs.ohouse.com/apne2/any/uploads/productions/v1-467321117507712.jpg", highlight: "셀프 스탠딩" },
        { product_id: 469951,  brand: "라이프썸", name: "무선 충전 다용도 핸디 청소기(LFS-HA17) 휴대/차량용 미니",                     price:  49900, review_avg: 4.75, review_count: 9032,  wish_count: 65879, image_url: "https://prs.ohouse.com/apne2/any/uploads/productions/v1-490028756078656.jpg", highlight: "핸디 미니" }
      ]
    },
    {
      // 섹션 3: 침구·매트 청소기 — 알러지/먼지 페르소나에 가장 fit
      name: "침구·매트 청소기",
      products: [
        { product_id: 2615772, brand: "한경희생활과학", name: "나이트클린 UV살균 러그 이불 침구청소기 HEVS-D100",                price:  99000, review_avg: 4.92, review_count: 478, wish_count: 6116,  image_url: "https://prs.ohou.se/apne2/any/uploads/productions/v1-269129766432768.png", highlight: "UV 살균" },
        { product_id: 972835,  brand: "보아르",       name: "딥슬립클링 듀얼 펀치 UV살균 이불 침구 청소기",                     price:  47900, review_avg: 4.8,  review_count: 730, wish_count: 19035, image_url: "https://prs.ohou.se/apne2/any/uploads/productions/v1-274133586440320.jpg", highlight: "듀얼 펀치" },
        { product_id: 3296410, brand: "밀다(MILDA)",  name: "클린 UV 살균 쇼파 침대 이불 집먼지 진드기 무선 침구청소기",        price:  64900, review_avg: 4.83, review_count: 42,  wish_count: 1039,  image_url: "https://prs.ohou.se/apne2/any/uploads/productions/v1-323612912463936.jpg", highlight: "무선 진드기" },
        { product_id: 3657483, brand: "보아르",       name: "하티클링 듀얼브러시 침구청소기 열풍 고주파 UV살균 패브릭 소파",     price: 109000, review_avg: 4.89, review_count: 37,  wish_count: 552,   image_url: "https://prs.ohouse.com/apne2/any/uploads/productions/v1-453479401095296.jpg", highlight: "열풍 + UV" },
        { product_id: 2933555, brand: "신일전자",     name: "신일 침구청소기 UV 살균 침대 이불 매트 진드기 제거기 SVC-BCL20",   price:  49900, review_avg: 4.81, review_count: 99,  wish_count: 1628,  image_url: "https://prs.ohou.se/apne2/any/uploads/productions/v1-257533819793536.jpg", highlight: "진드기 제거" },
        { product_id: 3641596, brand: "디클",         name: "습식 청소기 패브릭 쇼파 카페트 침구 (헤드 5종 증정)",                price:  99000, review_avg: 4.97, review_count: 33,  wish_count: 451,   image_url: "https://prs.ohouse.com/apne2/any/uploads/productions/v1-413223679582336.png", highlight: "습식 클리닝" }
      ]
    }
  ]
};
