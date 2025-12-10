import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Link,
  Button,
  Hr,
} from '@react-email/components';

interface DailyDevotionalProps {
  dayNumber: number;
  title: string;
  subtitle?: string;
  scriptureReference: string;
  devotionalExcerpt: string;
  dayUrl: string;
  unsubscribeToken: string;
}

export default function DailyDevotional({
  dayNumber,
  title,
  subtitle,
  scriptureReference,
  devotionalExcerpt,
  dayUrl,
  unsubscribeToken,
}: DailyDevotionalProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://achristmasancestry.com';

  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f9fafb', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
          <div style={{ backgroundColor: '#065f46', padding: '20px', borderRadius: '8px 8px 0 0' }}>
            <Text style={{ color: '#fbbf24', fontSize: '14px', margin: '0', textAlign: 'center', fontWeight: 'bold' }}>
              DAY {dayNumber}
            </Text>
            <Heading style={{ color: '#ffffff', fontSize: '28px', margin: '10px 0 0', textAlign: 'center' }}>
              {title}
            </Heading>
            {subtitle && (
              <Text style={{ color: '#d1fae5', fontSize: '16px', fontStyle: 'italic', margin: '5px 0 0', textAlign: 'center' }}>
                {subtitle}
              </Text>
            )}
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '0 0 8px 8px' }}>
            <Text style={{ fontSize: '14px', fontWeight: 'bold', color: '#991b1b', margin: '0 0 20px' }}>
              {scriptureReference}
            </Text>

            <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
              {devotionalExcerpt}...
            </Text>

            <Button
              href={dayUrl}
              style={{
                backgroundColor: '#991b1b',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '6px',
                textDecoration: 'none',
                display: 'inline-block',
                marginTop: '20px',
              }}
            >
              Read Full Devotional & Watch Video
            </Button>

            <Hr style={{ margin: '30px 0', borderColor: '#e5e7eb' }} />

            <Text style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
              Continue your advent journey by reading today's full devotional and watching the companion video.
            </Text>

            <Text style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6', marginTop: '20px' }}>
              Blessings,
              <br />
              The A Christmas Ancestry Team
            </Text>

            <Text style={{ fontSize: '12px', color: '#9ca3af', marginTop: '30px' }}>
              <Link
                href={`${siteUrl}/api/newsletter/unsubscribe?token=${unsubscribeToken}`}
                style={{ color: '#9ca3af', textDecoration: 'underline' }}
              >
                Unsubscribe
              </Link>
            </Text>
          </div>
        </Container>
      </Body>
    </Html>
  );
}
