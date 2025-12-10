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

interface WelcomeEmailProps {
  email: string;
  unsubscribeToken: string;
}

export default function WelcomeEmail({ email, unsubscribeToken }: WelcomeEmailProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://achristmasancestry.com';

  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f9fafb', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
          <div style={{ backgroundColor: '#991b1b', padding: '20px', borderRadius: '8px 8px 0 0' }}>
            <Heading style={{ color: '#ffffff', fontSize: '28px', margin: '0', textAlign: 'center' }}>
              Welcome to A Christmas Ancestry!
            </Heading>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '0 0 8px 8px' }}>
            <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
              Thank you for subscribing to A Christmas Ancestry!
            </Text>

            <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
              You'll receive a daily devotional in your inbox each morning at 12:01 AM EST throughout December.
              Each devotional explores the genealogy of Jesus Christ, revealing how every generation pointed to the Messiah.
            </Text>

            <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
              <strong>What to expect:</strong>
            </Text>
            <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
              <li>Daily devotionals unlocking each day of December</li>
              <li>Video content exploring biblical ancestry</li>
              <li>Reflection questions for personal or group study</li>
              <li>The complete story leading to Christmas Day</li>
            </ul>

            <Button
              href={siteUrl}
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
              Visit the Advent Calendar
            </Button>

            <Hr style={{ margin: '30px 0', borderColor: '#e5e7eb' }} />

            <Text style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
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
