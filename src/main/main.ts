import 'module-alias/register';
import { appBuilder } from '@/main/builders';

const port = 3000;

async function bootstrap(): Promise<void> {
  const app = await appBuilder();
  await await app.listen(port, '0.0.0.0');
}
bootstrap().then(() => console.log(`Application is running on: ${port}`));
