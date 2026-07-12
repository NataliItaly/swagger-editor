import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <h1>Swagger/OpenAPI UI</h1>
      <p>This app was made for RS School React Course Final Team Project</p>
      <h2>Our Team</h2>
      <p>
        Team lead: Tema Temov
        <Link href="https://github.com/dzzuze">GitHub</Link>
      </p>
      <p>
        Nataliya Krylova
        <Link href="https://github.com/NataliItaly">GitHub</Link>
      </p>
      <p>
        Savely
        <Link href="">GitHub</Link>
      </p>
      <Link href="https://rs.school/">RS School</Link>
      <Link href="https://rs.school/courses/reactjs">React Course</Link>
      <Link href="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/final.md">
        Task link
      </Link>
    </div>
  );
}
