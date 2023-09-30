import Container from "./components/container"
import HomeBanner from "./components/homeBanner"

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner></HomeBanner>
        </div>
      </Container>
    </div>
  )
}
