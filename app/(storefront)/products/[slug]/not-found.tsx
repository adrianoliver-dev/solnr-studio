import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <Container className="min-h-[70vh] flex flex-col items-center justify-center">
      <span className="font-mono text-[10px] uppercase tracking-widest text-[--color-accent] mb-4">
        404
      </span>
      <Heading level={2} className="text-3xl font-normal font-display text-center">
        This piece no longer exists.
      </Heading>
      <p className="font-sans text-sm text-[--color-text-muted] mt-4 text-center max-w-xs">
        It may have sold out or been archived.
      </p>
      <Link href="/catalog" className="mt-8">
        <Button variant="secondary" size="md">
          Return to Collection
        </Button>
      </Link>
    </Container>
  );
}
