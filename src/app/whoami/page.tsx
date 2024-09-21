import { Habilidades } from '@/types/habilidades';
import { Hobbies } from '@/types/hobbies';
import Image from 'next/image';
import FotoApresentacao from '/public/Foto_Perfil-13.webp';

const birthDate = new Date(1997, 6, 9);
const today = new Date();
const age =
  today.getFullYear() - birthDate.getFullYear() -
  (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) ? 1 : 0);

interface SkillItemProps {
  imgPath: string;
  name: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ imgPath, name }) => (
  <div className="text-center">
    <Image src={imgPath} alt={name} width={57} height={58} loading="lazy" />
    <p className='mt-2 text-[10px]'>{name}</p>
  </div>
);

export default function WhoAmI() {
  return (
    <div className='bg-black min-h-screen flex flex-col items-center pt-4 pb-10 px-10 sm:p-24'>
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 md:grid-rows-2 w-full">
        <div className="flex items-center justify-center">
          <Image
            src={FotoApresentacao}
            alt={"foto de apresentação Thaynná"}
            className="min-w-[21rem] min-h-[30rem] w-[21rem] h-[30rem]"
            width={1080}
            height={1080}
            loading="lazy"
          />
        </div>

        <div className="md:row-span-2 flex gap-6 mt-10 sm:mt-0">
          <div>
            <Image src={"/Ola!.svg"} alt={"Imagem Olá!"} className="w-44 h-16 mb-4" width={240} height={240} loading="lazy" />
            <div className='flex flex-col text-white gap-5 text-left text-xs leading-5'>
              <p>
                Sou Thaynná, tenho {age} anos e atualmente estou cursando o 6º período em Tecnologia em Design Gráfico.
                Sou Designer gráfica com 4 anos de experiência, atuando principalmente na produção de peças para mídias sociais,
                design editorial e produção de peças impressas.
              </p>
              <p>
                Ao longo desse tempo, tive a oportunidade de trabalhar em projetos de grande e pequena escala,
                desenvolvendo materiais visuais de alta qualidade.
              </p>
              <p>
                Uma das minhas maiores habilidades é o trabalho em equipe. Sou didática, atenciosa e comunicativa, características
                que me permitem colaborar efetivamente com os colegas e compartilhar conhecimentos de forma clara. Acredito na
                importância de ouvir as necessidades do cliente e traduzi-las em soluções criativas e impactantes.
              </p>
              <p>
                Sou uma profissional comprometida em oferecer um design gráfico de alta qualidade, que combina estética visual com funcionalidade.
              </p>
              <p>
                Empolgada para enfrentar novos desafios e expandir minha carreira na área do design.
                Com minha paixão pelo campo e minha experiência sólida, estou pronta para contribuir para
                projetos criativos e alcançar resultados notáveis.
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:items-center justify-center mt-8 flex-col gap-4 text-white">
          <div className='flex flex-col'>
            <div>
              <p className='text-xl font-light mb-[8px]'>Habilidades</p>
              <span className='block bg-white w-[207px] h-[1.5px] rounded-full mb-4'></span>
            </div>
            <div className='flex gap-4'>
              {Habilidades.map(habl => (
                <SkillItem key={habl.id} imgPath={habl.imgPath} name={habl.name} />
              ))}
            </div>
          </div>

          <div className='flex flex-col'>
            <div>
              <p className='text-xl font-light mb-[8px]'>Hobbies</p>
              <span className='block bg-white w-[207px] h-[1.5px] rounded-full mb-4'></span>
            </div>
            <div className='flex gap-4'>
              {Hobbies.map(habl => (
                <SkillItem key={habl.id} imgPath={habl.imgPath} name={habl.name} />
              ))}
            </div>
          </div>

          <div className='flex flex-col'>
            <div>
              <p className='text-xl font-light mb-[8px]'>Referências</p>
              <span className='block bg-white w-[207px] h-[1.5px] rounded-full mb-4'></span>
            </div>
            <div className='flex gap-4'>
              <div className='flex gap-4'>
                <Image
                  src={"/IFF-15.svg"}
                  alt={"Icone Instituto Federal Fluminense"}
                  width={57}
                  height={58}
                  loading="lazy"
                />
                <div className='mt-1 text-[10px]'>
                  <p>Alan Rene Lopes Neves</p>
                  <p>Coordenador do curso de Design Gráfico</p>
                  <p>alan.r.neves@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
