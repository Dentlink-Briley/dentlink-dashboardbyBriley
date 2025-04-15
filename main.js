
document.body.style.background = '#F4F1FD';
document.body.style.fontFamily = 'sans-serif';

const container = document.createElement('div');
container.style.padding = '2rem';

const title = document.createElement('h1');
title.textContent = '🎉 Dentlink 대시보드 by Briley 정상 작동 중!';
title.style.color = '#5E3FD7';

const description = document.createElement('p');
description.textContent = '이 화면이 보인다면 GitHub 배포에 성공한 것입니다. 이제 실시간 데이터를 연결해보세요!';
description.style.fontSize = '18px';

container.appendChild(title);
container.appendChild(description);
document.body.appendChild(container);
