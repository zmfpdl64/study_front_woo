import { Fragment } from 'react'
import MarkdownContent from '../components/MarkdownContent'

export default function Home() {
    const markdownContent = `
# 개발자의 일상적인 코딩 이야기

안녕하세요! 오늘은 제가 자주 사용하는 코드 스니펫들을 공유하려고 합니다.

## 1. TypeScript에서 제네릭 사용하기

TypeScript에서 제네릭을 사용하면 재사용 가능한 컴포넌트를 만들 수 있습니다:

\`\`\`typescript
interface Box<T> {
  contents: T;
}

function unbox<T>(box: Box<T>): T {
  return box.contents;
}

// 사용 예시
const stringBox: Box<string> = { contents: "Hello!" };
const numberBox: Box<number> = { contents: 42 };
\`\`\`

## 2. React Hooks 활용하기

커스텀 훅을 만들어 로직을 재사용할 수 있습니다:

\`\`\`jsx
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  return [storedValue, setStoredValue];
}
\`\`\`

## 3. CSS 스타일링 팁

> 💡 CSS Grid를 활용하면 복잡한 레이아웃도 쉽게 만들 수 있습니다.

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
\`\`\`

### 마크다운의 장점
- **가독성이 좋음**
- *스타일링이 쉬움*
- \`코드 블록\` 지원
- 테이블 지원

| 기능 | 지원 여부 |
|------|-----------|
| 제목 | ✅ |
| 코드 블록 | ✅ |
| 테이블 | ✅ |
| 체크리스트 | ✅ |
    `

    return (
        <Fragment>
            <article className="post-card">
                <h2 className="post-title">첫 번째 블로그 포스트</h2>
                <div className="post-meta">
                    <span>2024년 3월 24일</span>
                    <span> • </span>
                    <span>개발</span>
                </div>
                <div className="post-excerpt">
                    <MarkdownContent content={markdownContent} />
                </div>
            </article>

            <article className="post-card">
                <h2 className="post-title">두 번째 블로그 포스트</h2>
                <div className="post-meta">
                    <span>2024년 3월 23일</span>
                    <span> • </span>
                    <span>기술</span>
                </div>
                <div className="post-excerpt">
                    <p>최신 기술 트렌드와 개발 도구에 대한 소개를 준비하고 있습니다. 많은 관심 부탁드립니다!</p>
                </div>
            </article>

            <article className="post-card">
                <h2 className="post-title">세 번째 블로그 포스트</h2>
                <div className="post-meta">
                    <span>2024년 3월 22일</span>
                    <span> • </span>
                    <span>일상</span>
                </div>
                <div className="post-excerpt">
                    <p>개발자의 일상과 생각을 공유하는 공간입니다. 함께 성장하고 발전하는 블로그가 되었으면 합니다.</p>
                </div>
            </article>
        </Fragment>
    )
}