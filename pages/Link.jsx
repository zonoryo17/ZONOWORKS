import Layout from "../components/layout"
import Link from '@mui/material/Link';
import { Box, CardContent, Stack, Typography } from "@mui/material";
import layoutStyles from '../components/layout.module.css';
import { createTheme } from "@mui/material/styles";


const LinkPage = () => {
  let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 1025,
        xl: 1536,
      },
    }
  })
  return (
    <Layout>
      <div>
        <h1 className={layoutStyles.h1Text}>Link</h1>
      </div>
      <Box sx={{ display: 'flex', direction: 'column', justifyContent: 'center', marginBottom: 10 }}>
        <Stack spacing={3}>
          <Link href="https://zenn.dev/zonoryo03" sx={{ display: 'flex', boxShadow: "5px 5px 5px #c0c0c0", borderRadius: "8px", textDecoration: 'none' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Zenn
              </Typography>
              <Typography variant="body2" sx={{ color: '#000' }}>
                技術記事などをまとめています。
              </Typography>
            </CardContent>
          </Link>
          <Link href="https://zonoryo17.notion.site/f847889044e64be5b699382f2b00774f" sx={{ display: 'flex', boxShadow: "5px 5px 5px #c0c0c0", borderRadius: "8px", textDecoration: 'none' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Notion
              </Typography>
              <Typography variant="body2" sx={{ color: '#000' }}>
                学習記録や学習メモ、学習記事などをまとめています。
              </Typography>
            </CardContent>
          </Link>
          <Link href="https://twitter.com/zonoryo03" sx={{ display: 'flex', boxShadow: "5px 5px 5px #c0c0c0", borderRadius: "8px", textDecoration: 'none' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Twitter
              </Typography>
              <Typography variant="body2" sx={{ color: '#000' }}>
                日々の積み上げや未経験からエンジニア転職までの課程を発信しています。
              </Typography>
            </CardContent>
          </Link>
          <Link href="https://github.com/zonoryo17" sx={{ display: 'flex', boxShadow: "5px 5px 5px #c0c0c0", borderRadius: "8px", textDecoration: 'none' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                GitHub
              </Typography>
              <Typography variant="body2" sx={{ color: '#000' }}>
                個人開発やチーム開発で作成したポートフォリオのソースコードを管理しています。
              </Typography>
            </CardContent>
          </Link>
        </Stack>
      </Box>
    </Layout >
  )
}

export default LinkPage;