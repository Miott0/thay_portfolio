"use client"
import { Habilidades } from '@/types/habilidades';
import { Hobbies } from '@/types/hobbies';
import Image from 'next/image';

export default function WhoAmI() {

  const birthDate = new Date(1997, 6, 9); // A data de nascimento de Thaynná é 7 de abril de 1999
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <main className="flex bg-black min-h-screen flex-col items-center justify-between pt-11 pb-10 px-10  sm:p-24 ">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
        <div className="FOTO-APRESENTACAO mb-16 flex items-center justify-center">
          <Image
            src={"/FotoApresentacao.svg"}
            alt={"foto de apresentação Thaynná"}
            className="w-[21rem] h-[30rem]"
            width={600}
            height={600}
          />
        </div>

        <div className="TEXTO-APRESENTACAO md:row-span-2 ">
          <div className='IMAGEM-OLA  '>
            <Image
              src={"/Ola!.svg"}
              alt={"Imagem Olá!"}
              className="w-44 h-16 mb-11 "
              width={600}
              height={600}
            />

            <div className='TEXT GRANDE PRA KRL flex flex-col text-white gap-5 text-left text-xs leading-5'>
              <div className='PRIMEIRO-PARAGRAFO'>
                Sou Thaynná, tenho {age} anos e atualmente estou cursando o 6º período em Tecnologia em Design Gráfico.
                Sou Designer gráfica com 4 anos de experiência, atuando principalmente na produção de peças para mídias sociais,
                design editorial e produção de peças impressas.
              </div>
              <div className='SEGUNDO-PARAGRAFO'>
                Ao longo desse tempo, tive a oportunidade de trabalhar em projetos de grande e pequena escala,
                desenvolvendo materiais visuais de alta qualidade
              </div>
              <div className='TERCEIRO-PARAGRAFO'>
                Uma das minhas maiores habilidades é o trabalho em equipe. Sou didática, atenciosa e comunicativa, características
                que me permitem colaborar efetivamente com os colegas e compartilhar conhecimentos de forma clara. Acredito na
                importância de ouvir as necessidades do cliente e traduzi-las em soluções criativas e impactantes.
              </div>

              <div className='QUARTO-PARAGRAFO'>
                Sou uma profissional comprometida em oferecer um design gráfico de alta qualidade, que combina estética visual com funcionalidade.
              </div>

              <div className='QUINTO-PARAGRAFO'>
                Empolgada para enfrentar novos desafios e expandir minha carreira na área do design.
                Com minha paixão pelo campo e minha experiência sólida, estou pronta para contribuir para
                projetos criativos e alcançar resultados notáveis.
              </div>
            </div>
          </div>
        </div>


        <div className="FINAL-SECTION flex flex-col gap-4 ">
          
          <div className='HABILIDADES flex flex-col text-white'>
            <div>
              <p className='text-xl font-ligth mb-[8px]'>Habilidades</p>
              <span className='block bg-white w-[207px] h-[1.5px] rounded-full mb-4'></span>
            </div>

            <div className='flex gap-4'>
              {/* MAPPING HABILIDADES */}
              {Habilidades.map(habl => (
                <div className=''>
                  <Image
                    src={habl.imgPath}
                    alt={habl.name}
                    width={57}
                    height={58}
                  />
                  <div className='mt-[6px]'>
                    <p className='text-[10px] text-center'>{habl.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='HOBBIES flex flex-col text-white'>
            <div>
              <p className='text-xl font-ligth mb-[8px]'>Hobbies</p>
              <span className='block bg-white w-[207px] h-[1.5px] rounded-full mb-4'></span>
            </div>
            <div className='flex gap-4'>
              {/* MAPPING HOBBIES */}
              {Hobbies.map(habl => (
                <div className=''>
                  <Image
                    src={habl.imgPath}
                    alt={habl.name}
                    width={57}
                    height={58}
                  />
                  <div className='mt-[6px]'>
                    <p className='text-[10px] text-center'>{habl.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className='RECOMENDACOES flex flex-col text-white'>
            <div>
              <p className='text-xl font-ligth mb-[8px]'>Referências</p>
              <span className='block bg-white w-[207px] h-[1.5px] rounded-full mb-4'></span>
            </div>

            <div className='flex gap-4'>
              {/* MAPPING HABILIDADES */}
        
                <div className='flex gap-4'>
                  <Image
                    src={"/IFF-15.svg"}
                    alt={"Icone Instituto Federal Fluminense"}
                    width={57}
                    height={58}
                  />
                  <div className='mt-[6px] text-[10px]'>
                    <p className=''>Alan Rene Lopes Neves</p>
                    <p>Coordenador do curso de Design Gráﬁco</p>
                    <p>alan.r.neves@gmail.com</p>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

