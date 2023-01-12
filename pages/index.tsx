import Head from 'next/head'
import Appnav from '../components/organism/Appnav'
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PublishRoundedIcon from '@mui/icons-material/PublishRounded';
import PermMediaRoundedIcon from '@mui/icons-material/PermMediaRounded';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Halaman Beranda - Sistem Informasi Manajemen Pelayanan dan Berita</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className='w-screen h-[80vh] relative'>
        <Appnav />
        <Image src='/images/hero-5.jpg' alt="Hero's Site" layout='fill' objectFit='cover' className='pt-0 brightness-[0.3]'/>
      </Box>      
      <Container className='px-5'>
        <Paper variant='outlined' className='h-28 -translate-y-9 shadow-lg rounded-xl p-5 px-4'>
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <Link href="/" className='grid justify-center place-items-center'>
                <GroupsRoundedIcon color='primary' fontSize='large'/>
                <Typography variant='h6' className='font-bold' sx={{display: {xs: 'none', sm: 'block'}}}>Layanan Hubungan Masyarakat</Typography>
              </Link>
            </Grid>
            <Grid item sm={4}>
              <Link href='/' className='grid justify-center place-items-center'>
                <PublishRoundedIcon color='primary' fontSize='large'/>
                <Typography variant='h6' className='font-bold'sx={{display: {xs: 'none', sm: 'block'}}}>Layanan Publikasi</Typography>
              </Link>
            </Grid>
            <Grid item sm={4}>
              <Link href='/' className='grid justify-center place-items-center'>
                <PermMediaRoundedIcon color='primary'  fontSize='large'/>
                <Typography variant='h6' className='font-bold'sx={{display: {xs: 'none', sm: 'block'}}}>Layanan Media</Typography>
              </Link>
            </Grid>
          </Grid>
        </Paper>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, magni architecto aspernatur repudiandae pariatur veritatis debitis perferendis molestias voluptates dignissimos deleniti facilis aut magnam libero excepturi? Non amet velit cum quo corporis recusandae magnam explicabo. Ratione fugit obcaecati libero iure nostrum. Eius facere modi architecto eum ab, dicta incidunt assumenda sed cupiditate, asperiores neque perspiciatis, in perferendis culpa! Eum, nostrum omnis? Natus reiciendis autem dolorem minus alias, accusamus cupiditate sit saepe deserunt aliquid quod sed corporis quaerat nulla! Quod delectus ullam expedita ab magnam nisi nihil sequi veniam sit architecto, nemo dicta dolores, tenetur impedit temporibus? Ex veniam provident corporis reiciendis voluptas quasi libero temporibus sapiente illum. Voluptatem quod beatae corporis adipisci commodi quisquam quibusdam cupiditate natus fuga labore aspernatur omnis necessitatibus et asperiores ex officiis molestiae aliquam voluptatibus ab dolorum, consectetur, voluptas nulla assumenda quia? Assumenda, ad. Maiores ullam ducimus consequatur, sequi dicta culpa placeat laudantium perferendis impedit error eius obcaecati vitae illo id commodi sit. Commodi repellendus laborum vero ipsam autem reiciendis modi doloribus, nisi excepturi nemo dolorum soluta deleniti nesciunt, tempora odio aperiam omnis. Distinctio fugit voluptates reprehenderit ipsum vero, blanditiis atque nam debitis neque unde quo. Error earum quia accusantium a qui nostrum est veniam sequi dolor in expedita reprehenderit, enim repellendus rerum amet delectus cumque consequatur harum eveniet obcaecati voluptatem voluptate voluptatum dignissimos consectetur? Repellendus aperiam suscipit laudantium repellat, beatae sint iusto velit aliquid voluptatibus tempora maxime voluptate corrupti est, nulla temporibus recusandae reprehenderit eum asperiores aliquam laborum, sit facilis molestias. Accusantium consectetur recusandae fugiat. Soluta modi aliquam tempore nemo neque tenetur vero natus aut molestias animi. Minima pariatur nam quas reprehenderit quisquam at illum facere quasi perferendis, ipsa illo sit qui molestias consectetur dolor fugit quidem cumque rem hic quam animi consequuntur deleniti. Vel et autem sapiente reprehenderit, ab iure dolore alias harum numquam quis recusandae voluptates hic sed vero unde, a atque quae est aperiam quaerat eius perspiciatis. Veniam necessitatibus magnam, nihil excepturi magni aperiam aspernatur ipsam similique expedita aliquid harum beatae ducimus ratione dolores fugiat, quas praesentium id! Tenetur hic soluta nostrum sequi quibusdam voluptate cupiditate esse. Maxime reprehenderit dolore praesentium nulla voluptatibus cum iste quibusdam doloremque ducimus fuga cumque sequi autem deserunt perferendis iure, possimus, quis voluptate? Quod, eaque. Illo fugiat ullam libero, non officiis, deserunt laudantium obcaecati neque veniam pariatur minima at odio id iusto, eaque ratione error quod expedita! Rerum praesentium numquam earum excepturi odit, incidunt repellat quaerat corporis quibusdam aliquam debitis ex aliquid accusantium voluptate reprehenderit dicta inventore blanditiis quidem, nulla porro non deleniti quod. Distinctio vel est reiciendis commodi expedita tempora, dolor blanditiis! Obcaecati cumque facilis iusto minima quia quidem non temporibus unde harum quis rerum aspernatur necessitatibus molestias dolorem, atque doloribus officiis? Tempore, voluptatem optio perspiciatis architecto voluptas unde veniam aliquam animi nihil? Corrupti cumque minus, ipsa officiis eaque, possimus quasi itaque eligendi aut praesentium autem accusantium illo est repellat adipisci quae iste in ullam sed recusandae. Exercitationem distinctio est ad qui iste dolorum totam enim, ut nobis labore, velit impedit praesentium suscipit assumenda! Quisquam nostrum illum animi est illo autem deserunt blanditiis, explicabo commodi perferendis, beatae ducimus eos, laboriosam atque iste assumenda delectus cumque. Dolores quaerat officiis excepturi suscipit repudiandae alias quo nulla amet, a, neque placeat sed hic reprehenderit deserunt impedit quisquam commodi, ducimus illum accusantium aliquid tenetur dignissimos? Labore modi odit corrupti recusandae, eos maiores nostrum eligendi sunt at quas dolore illum, a fuga reiciendis cum inventore soluta ipsam accusantium voluptates temporibus nesciunt nemo sequi earum? Vero neque placeat eius laboriosam architecto labore aliquid repellendus nemo temporibus. Dolor natus ex veniam corporis cum quia fugit molestias suscipit architecto esse? Ea, distinctio. Ratione et tempore repudiandae ipsa officiis accusantium nesciunt est maxime dolores molestiae veritatis labore sapiente ea quis nostrum doloribus molestias officia pariatur, porro, beatae laboriosam minus vitae nisi. Sequi, aperiam sapiente maxime animi neque laborum repellat, ad natus possimus cumque ab? Aperiam quae distinctio dolorum non vel ipsa beatae exercitationem ab, voluptas facilis ex iste! Fugiat reiciendis maiores dolorum odit, quos, praesentium sapiente quis incidunt ab dolorem inventore sed laborum odio nobis error eaque. Odio odit saepe necessitatibus dolores magni labore molestiae distinctio veniam suscipit accusamus quos sunt, eius, quam nemo nobis culpa harum. Adipisci tempore, quam, voluptate iusto quo quis tempora magnam minima ipsam nesciunt eius possimus voluptatibus neque officia, inventore molestiae debitis deserunt? Reprehenderit, consequatur quisquam voluptas distinctio non quo neque delectus rem ex recusandae et quos doloribus ratione labore, saepe unde. Quisquam possimus quasi quae, et nihil omnis error nemo perferendis adipisci itaque laboriosam quibusdam, voluptatibus porro corrupti alias eos nisi ipsam cum ea quaerat repellendus tempora blanditiis. Ab esse cupiditate in aspernatur porro. Eveniet recusandae eius obcaecati perspiciatis. Ipsum obcaecati voluptates vero necessitatibus facere atque, quo sunt corporis at et molestiae. Quas vero vel labore! Exercitationem, perspiciatis nobis. Repudiandae id quae dolor facilis consequatur, mollitia iure quia sequi aspernatur esse, dolorum dicta adipisci vero rerum, possimus iste? Adipisci, commodi voluptate. Necessitatibus ad animi voluptatem est, voluptas quaerat ipsam, itaque delectus rerum amet, alias natus nam. Natus illum sed error sapiente? Ab officiis reiciendis quam culpa ducimus consectetur vel repellendus? Numquam voluptate dolorem inventore unde accusantium optio tempora at quidem laudantium placeat vel, exercitationem, voluptatibus fuga assumenda dolorum magni. Ipsam iusto illum deserunt ab quibusdam vitae ad neque, blanditiis autem voluptatem quae sed nobis quam incidunt. Nihil dolore rerum accusamus nam! Est quasi amet provident! Eligendi laborum et sed aliquid incidunt, voluptates in? Ex molestiae enim porro qui earum explicabo sequi quo delectus tempore quisquam non labore possimus quidem soluta necessitatibus adipisci odit praesentium nulla deleniti, perspiciatis natus sunt! Magnam voluptatibus cumque nesciunt aut labore voluptatum reiciendis sapiente unde quaerat laudantium eveniet odit accusantium tempora, eos beatae voluptates nemo quos vitae quam architecto necessitatibus, aspernatur nihil repudiandae cum! Illum eaque perspiciatis consequatur dolores sint quas odio at, maxime vero inventore laudantium odit earum, facere aperiam nisi doloremque enim reiciendis qui architecto iste voluptatum molestiae? Facilis at veritatis eius laudantium nihil harum provident architecto quaerat, iste doloremque laboriosam totam pariatur maxime. Sapiente amet nisi odit repellendus iste rem facilis pariatur!
      </Container>
    </>
  )
}
