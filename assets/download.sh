#!/bin/bash
# Hub - shopping/product images
declare -A IMGS=(
  # Hub - 우상단 회전된 product 썸네일 3개 (AI 카드)
  ["hub-thumb-1.png"]="84727a19-b93d-4f56-ae81-5a5203c86ce2"
  ["hub-thumb-2.png"]="55bd4c3e-618f-4b6c-a8a4-8b85a7b4d31c"
  ["hub-thumb-3.png"]="ef9277b4-bccf-44fc-8ee9-7c0ae3a056f3"
  # Hub - 쇼핑 섹션 캐러셀 3개
  ["hub-shop-1.png"]="7b0764ac-a7ec-4ab6-bb14-7feb7f4773e6"
  ["hub-shop-2.png"]="36fc93f5-fab4-48a4-91bc-8f8085b33878"
  ["hub-shop-3.png"]="5f76949f-b712-4901-a596-d34aecef97a3"
  # Query 1person - 8 products
  ["q1p-1.png"]="af046e37-18c1-49d3-af8b-6dc88bf0c5ae"
  ["q1p-2.png"]="ca2a7492-3cba-4bdb-8d1d-9f603e126db6"
  ["q1p-3.png"]="d04afdf1-3ece-42b3-92db-e197d40299d4"
  ["q1p-4.png"]="09b58bda-f59c-48c1-8398-87927612c70c"
  ["q1p-5.png"]="7e92c63d-936e-4867-9292-8f7d9d2bb1aa"
  ["q1p-6.png"]="72fcca7b-95d2-4fbb-b105-a2747600fe6f"
  ["q1p-7.png"]="c1368221-df1b-4a3e-b99a-60633f2a164c"
  ["q1p-8.png"]="2c0d176c-5597-4764-9e71-a7235acae89c"
  # Budget - 4 products  
  ["q-budget-1.png"]="7d721682-6116-4c7a-8b55-8e604a60a4ec"
  ["q-budget-2.png"]="a6533560-d6e9-436d-b875-f0fd231dce4b"
  ["q-budget-3.png"]="7f5bd6a9-93dd-4a63-af5e-f15f3f69b017"
  ["q-budget-4.png"]="07fde565-dc04-4836-ac80-9d34e5135116"
  # Comparison - 8 products + uploaded
  ["cmp-l-1.png"]="4d9c2c11-764e-42c8-afb1-ba65a28c2d9b"
  ["cmp-l-2.png"]="496e6b7b-e4a0-4f95-b38a-99fb3571102e"
  ["cmp-l-3.png"]="99ecadde-cc1c-4de5-8309-fbcff1cbc70b"
  ["cmp-l-4.png"]="bde737dd-9d46-4afb-9ebc-dce54004ef48"
  ["cmp-r-1.png"]="21656e30-f331-4fcc-a7f1-4ea89445f8d9"
  ["cmp-r-2.png"]="835a7a76-3748-4d7e-812c-5d9ede947ce6"
  ["cmp-uploaded-1.png"]="b00aaa44-61dd-495b-9ff3-86d4e5e64eab"
  ["cmp-uploaded-2.png"]="c982c91e-515b-4db1-a59f-1bfcdd01d74d"
)

for name in "${!IMGS[@]}"; do
  curl -s -o "$name" "https://www.figma.com/api/mcp/asset/${IMGS[$name]}" &
done
wait
echo "done"
ls -1 | head -5
