export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return (
      <div>
        <h1>
          Docs page: {params.slug[0]} and concept {params.slug[0]}
        </h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Docs homepage</h1>
    </div>
  );
}
