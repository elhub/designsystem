import {
  Badge,
  BodyText,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeaderActions,
  CardHeaderContent,
  CardTitle
} from '@elhub/ds-components'
import { IconQualitiesCircle } from '@elhub/ds-icons'

export const CardUsageExample = () => (
  <Card>
    <CardHeader>
      <CardHeaderContent>
        <CardTitle>Your vacation house</CardTitle>
        <CardDescription>It's a beautiful place</CardDescription>
      </CardHeaderContent>
      <CardHeaderActions>
        <Badge status='approved' variant='block' size='small' icon={IconQualitiesCircle}>
          Active
        </Badge>
      </CardHeaderActions>
    </CardHeader>
    <CardContent style={{ display: 'grid', gap: 16 }}>
      <div>
        <BodyText weight='bold' size='small'>
          Grid owner
        </BodyText>
        <BodyText size='small'>Owner AS</BodyText>
      </div>
      <div>
        <BodyText weight='bold' size='small'>
          Balance Supplier
        </BodyText>
        <BodyText size='small'>Energi AS</BodyText>
      </div>
    </CardContent>
    <CardFooter>
      <Button variant='tertiary'>Details</Button>
      <Button variant='tertiary'>Metering Values</Button>
    </CardFooter>
  </Card>
)
