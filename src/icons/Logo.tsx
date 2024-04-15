import { SVGProps } from "react"

export const Logo = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg 
            {...props}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 365 133"
        >

            <path id="Ponto" fill="#DBA1AD" d="M75.77,121.62c-1.46-1.39-2.19-3.15-2.19-5.27s.74-3.88,2.21-5.26,3.31-2.07,5.52-2.07,4.02.74,5.55,2.21c1.53,1.47,2.3,3.24,2.3,5.3s-.76,3.83-2.28,5.17c-1.52,1.34-3.38,2.01-5.57,2.01s-4.07-.69-5.53-2.08Z" />
            <g id="Letra">
                <path d="M62.59,32.03c-.4-1.74-.88-3.39-1.44-4.95-.56-1.55-1.24-3.04-2.05-4.46-.81-1.42-1.69-2.64-2.65-3.67-.96-1.03-2.07-1.84-3.32-2.45-1.25-.6-2.58-.91-3.99-.91v41.03c0,.6.3,1.03.89,1.29.59.26,1.48.42,2.67.49l1.71.13v1.17c-4.94-.18-9.88-.27-14.83-.27-2.19,0-4.52.02-6.99.07-2.47.04-4.39.09-5.75.13l-2.08.07v-1.17l1.71-.13c1.18-.07,2.07-.23,2.67-.5.59-.27.89-.69.89-1.27V15.6c-1.41,0-2.74.3-3.99.91-1.25.6-2.36,1.42-3.32,2.45-.96,1.03-1.84,2.25-2.63,3.67-.79,1.42-1.47,2.91-2.03,4.46-.56,1.55-1.03,3.2-1.41,4.95h-1.31c.13-2.06.2-5.4.2-10.03l-.2-8.05c2.68.13,6.23.2,10.63.2h27.24c1.97,0,3.83-.02,5.6-.05,1.77-.03,3.05-.06,3.86-.08l1.17-.07c-.13,3.4-.2,6.08-.2,8.05s.02,3.92.05,5.6c.03,1.68.07,2.83.12,3.46l.03.97h-1.24Z" />
                <path d="M66.18,58.74l1.44-.13c.8-.07,1.36-.19,1.66-.37.3-.18.45-.54.45-1.07V12.58c0-.58-.5-.91-1.51-.97l-2.05-.13v-.94h8.02c5.21,0,9.52-.41,12.92-1.24-.13,1.92-.2,4.22-.2,6.88,0,7.74-.22,14.21-.67,19.42,1.14-6.73,5.47-10.1,12.98-10.1,3.49,0,6.33,1,8.52,3,2.19,2,3.29,4.62,3.29,7.87v20.8c0,.51.15.87.44,1.06.29.19.85.32,1.68.39l1.44.13v.97c-3.24-.18-7.29-.27-12.14-.27-1.79,0-3.64.02-5.55.07s-3.37.09-4.38.13l-1.54.07v-.97l1.04-.13c.65-.07,1.12-.2,1.41-.4.29-.2.44-.55.44-1.04v-23.48c0-2.1-.85-3.15-2.55-3.15-1.3,0-2.35.81-3.17,2.42-.82,1.61-1.22,3.85-1.22,6.71v17.51c0,.38.09.67.27.87.18.2.38.34.6.4.22.07.55.12.97.17l1.04.13v.97c-3.62-.18-7.45-.27-11.47-.27-2.15,0-4.23.02-6.26.07-2.02.04-3.51.09-4.44.13l-1.44.07v-.97Z" />
                <path d="M126.32,60.82c-2.95,0-5.28-.7-6.99-2.11-1.71-1.41-2.57-3.32-2.57-5.74,0-1.5.25-2.78.74-3.86.49-1.07,1.29-1.99,2.4-2.75,1.11-.76,2.36-1.4,3.77-1.91,1.41-.51,3.23-1.04,5.47-1.58,1.12-.27,2.02-.5,2.7-.7.68-.2,1.42-.46,2.21-.79.79-.32,1.42-.68,1.88-1.06s.89-.85,1.31-1.41c.41-.56.71-1.21.89-1.96.18-.75.27-1.62.27-2.6,0-2.44-.67-4.2-2.01-5.28-1.34-1.08-3.44-1.63-6.31-1.63s-5.36.73-7.28,2.18c.94-.22,1.79-.34,2.55-.34,1.95,0,3.59.52,4.93,1.56,1.34,1.04,2.01,2.6,2.01,4.68s-.68,3.65-2.03,4.7c-1.35,1.05-2.99,1.58-4.91,1.58s-3.56-.53-4.92-1.58c-1.35-1.05-2.03-2.62-2.03-4.7,0-3.24,1.46-5.73,4.39-7.45,2.93-1.72,7.08-2.58,12.45-2.58,2.46,0,4.65.12,6.56.37s3.71.68,5.38,1.31c1.68.63,3.07,1.45,4.18,2.48,1.11,1.03,1.97,2.35,2.6,3.96.62,1.61.94,3.49.94,5.64v15.4c0,.89.13,1.52.39,1.86.26.35.63.52,1.12.52.76,0,1.39-.46,1.88-1.38.49-.92.78-1.83.87-2.75l1.14.13c-.65,5.19-4.08,7.78-10.3,7.78s-10.03-2.75-10.77-8.25c-1.07,5.5-5.38,8.25-12.92,8.25ZM134.71,56.29c.98,0,1.85-.59,2.58-1.76.74-1.17,1.11-3.09,1.11-5.75v-9.46c-.49.96-1.39,1.92-2.68,2.88-1.68,1.25-2.8,2.47-3.35,3.66-.56,1.19-.84,2.96-.84,5.33,0,1.9.27,3.23.82,3.98.55.75,1.34,1.12,2.36,1.12Z" />
                <path d="M173.56,63.3c0,1.88-.63,3.39-1.88,4.53-1.25,1.14-2.83,1.71-4.73,1.71-1.5,0-2.87-.44-4.13-1.31,1.7,2.15,4.52,3.22,8.45,3.22.85,0,1.63-.06,2.35-.17.72-.11,1.59-.4,2.63-.86,1.04-.46,1.98-1.09,2.83-1.9s1.72-1.97,2.6-3.51c.88-1.53,1.65-3.35,2.3-5.45h-10.03l-11.81-29.12c-.69-1.68-1.93-2.59-3.72-2.75l-.8-.07v-1.04c3.71.18,8,.27,12.85.27,2.15,0,4.38-.02,6.71-.07,2.33-.04,4.11-.09,5.37-.13l1.88-.07v1.04l-1.17.07c-1.52.07-2.28.84-2.28,2.31,0,.22.23,1.07.7,2.55l6.04,16.44,2.88-9.29c.58-1.86.87-3.67.87-5.43,0-1.92-.46-3.49-1.39-4.71-.93-1.22-2.46-1.86-4.58-1.93v-1.04c2.15.18,5.08.27,8.79.27,1.14,0,2.36-.02,3.66-.07,1.3-.04,2.31-.09,3.05-.13l1.07-.07v1.04c-1.99.18-3.75,1.14-5.27,2.87-1.52,1.73-2.86,4.39-4.03,7.97l-6.84,21.1c-.76,2.28-1.59,4.24-2.48,5.89-.9,1.64-1.79,2.95-2.68,3.92-.9.97-1.91,1.73-3.04,2.28-1.13.55-2.2.91-3.2,1.09-1.01.18-2.18.27-3.52.27-1.45,0-2.82-.17-4.11-.5-1.29-.34-2.47-.85-3.54-1.54-1.07-.69-1.92-1.63-2.55-2.82-.63-1.19-.94-2.56-.94-4.13,0-2.21.72-3.92,2.16-5.13s3.08-1.81,4.91-1.81,3.48.57,4.73,1.71c1.25,1.14,1.88,2.64,1.88,4.5Z" />
                <path d="M221.36,25.43c-.4,4.41-.6,8.62-.6,12.65h.07c.04-.78.11-1.5.2-2.15.09-.65.26-1.42.5-2.31s.56-1.69.94-2.4c.38-.7.91-1.43,1.58-2.18.67-.75,1.45-1.37,2.33-1.86.88-.49,1.98-.89,3.3-1.21,1.32-.31,2.78-.47,4.39-.47,3.49,0,6.33,1,8.52,3s3.29,4.62,3.29,7.87v20.87c0,.51.16.86.49,1.02.32.17.88.29,1.66.35l1.44.13v.97c-3.27-.18-7.32-.27-12.18-.27-1.79,0-3.64.02-5.55.07s-3.37.09-4.38.13l-1.54.07v-.97l1.04-.13c.42-.04.75-.1.97-.17.22-.07.42-.2.6-.4s.27-.49.27-.87v-23.48c0-2.1-.84-3.15-2.52-3.15-1.32,0-2.39.8-3.2,2.4-.82,1.6-1.22,3.82-1.22,6.66v17.58c0,.36.09.64.29.85.19.21.4.35.62.4.22.06.55.12.97.18l1.01.13v.97c-3.62-.18-7.45-.27-11.47-.27-2.15,0-4.23.02-6.26.07-2.02.04-3.51.09-4.45.13l-1.44.07v-.97l1.44-.13c.81-.07,1.36-.19,1.66-.37.3-.18.45-.54.45-1.07v-28.28c0-.6-.5-.95-1.51-1.04l-1.44-.13v-.97h3.25c3.94,0,7.27-.11,10.01-.32,2.74-.21,4.5-.43,5.28-.65l1.17-.34Z" />
                <path d="M271.84,25.43c-.4,4.41-.6,8.62-.6,12.65h.07c.04-.78.11-1.5.2-2.15.09-.65.26-1.42.5-2.31.25-.89.56-1.69.94-2.4.38-.7.91-1.43,1.58-2.18.67-.75,1.45-1.37,2.33-1.86.88-.49,1.98-.89,3.3-1.21,1.32-.31,2.78-.47,4.39-.47,3.49,0,6.33,1,8.52,3,2.19,2,3.29,4.62,3.29,7.87v20.87c0,.51.16.86.49,1.02.32.17.88.29,1.66.35l1.44.13v.97c-3.27-.18-7.33-.27-12.18-.27-1.79,0-3.64.02-5.55.07s-3.37.09-4.38.13l-1.54.07v-.97l1.04-.13c.42-.04.75-.1.97-.17.22-.07.42-.2.6-.4.18-.2.27-.49.27-.87v-23.48c0-2.1-.84-3.15-2.52-3.15-1.32,0-2.39.8-3.2,2.4-.82,1.6-1.22,3.82-1.22,6.66v17.58c0,.36.09.64.29.85.19.21.4.35.62.4.22.06.55.12.97.18l1.01.13v.97c-3.62-.18-7.45-.27-11.47-.27-2.15,0-4.23.02-6.26.07-2.02.04-3.51.09-4.44.13l-1.44.07v-.97l1.44-.13c.8-.07,1.36-.19,1.66-.37.3-.18.45-.54.45-1.07v-28.28c0-.6-.5-.95-1.51-1.04l-1.44-.13v-.97h3.25c3.94,0,7.27-.11,10.01-.32,2.74-.21,4.5-.43,5.28-.65l1.17-.34Z" />
                <path d="M311.7,60.82c-2.95,0-5.28-.7-6.99-2.11-1.71-1.41-2.57-3.32-2.57-5.74,0-1.5.25-2.78.74-3.86.49-1.07,1.29-1.99,2.4-2.75,1.11-.76,2.37-1.4,3.77-1.91,1.41-.51,3.23-1.04,5.47-1.58,1.12-.27,2.02-.5,2.7-.7.68-.2,1.42-.46,2.21-.79s1.42-.68,1.88-1.06c.46-.38.89-.85,1.31-1.41.41-.56.71-1.21.89-1.96.18-.75.27-1.62.27-2.6,0-2.44-.67-4.2-2.01-5.28-1.34-1.08-3.44-1.63-6.31-1.63s-5.36.73-7.28,2.18c.94-.22,1.79-.34,2.55-.34,1.95,0,3.59.52,4.93,1.56,1.34,1.04,2.01,2.6,2.01,4.68s-.68,3.65-2.03,4.7c-1.35,1.05-2.99,1.58-4.92,1.58s-3.56-.53-4.91-1.58c-1.35-1.05-2.03-2.62-2.03-4.7,0-3.24,1.46-5.73,4.39-7.45,2.93-1.72,7.08-2.58,12.45-2.58,2.46,0,4.65.12,6.56.37s3.71.68,5.38,1.31c1.68.63,3.07,1.45,4.18,2.48,1.11,1.03,1.97,2.35,2.6,3.96.63,1.61.94,3.49.94,5.64v15.4c0,.89.13,1.52.39,1.86.26.35.63.52,1.12.52.76,0,1.39-.46,1.88-1.38.49-.92.78-1.83.87-2.75l1.14.13c-.65,5.19-4.08,7.78-10.3,7.78s-10.03-2.75-10.77-8.25c-1.07,5.5-5.38,8.25-12.92,8.25ZM311.7,22.07c1.61-.83,3.17-1.84,4.66-3.04,1.5-1.2,2.71-2.28,3.64-3.25s1.93-1.92,3.02-2.85c1.08-.93,2.1-1.59,3.04-2,.67-.27,1.38-.4,2.11-.4,1.39,0,2.53.45,3.42,1.34.89.9,1.34,2.02,1.34,3.39,0,.94-.25,1.8-.75,2.58-.5.78-1.21,1.36-2.13,1.74-1.19.47-2.76.78-4.71.94-1.96.16-4.12.38-6.49.67-2.37.29-4.64.85-6.81,1.68l-.34-.8ZM320.08,56.29c.98,0,1.84-.59,2.58-1.76.74-1.17,1.11-3.09,1.11-5.75v-9.46c-.49.96-1.39,1.92-2.68,2.88-1.68,1.25-2.79,2.47-3.35,3.66-.56,1.19-.84,2.96-.84,5.33,0,1.9.27,3.23.82,3.98.55.75,1.34,1.12,2.37,1.12Z" />
                <path d="M50.95,122.99c-2.2.48-4.46.72-6.79.72s-4.59-.24-6.79-.72-4.33-1.28-6.41-2.39c-2.08-1.11-3.88-2.49-5.41-4.14-1.53-1.65-2.76-3.72-3.69-6.22-.93-2.5-1.4-5.3-1.4-8.39s.46-5.88,1.4-8.39c.93-2.5,2.16-4.58,3.69-6.22,1.53-1.65,3.34-3.02,5.41-4.14,2.07-1.11,4.21-1.91,6.41-2.39,2.2-.48,4.46-.72,6.79-.72s4.59.24,6.79.72c2.2.48,4.33,1.28,6.39,2.39,2.06,1.11,3.86,2.49,5.4,4.14,1.53,1.65,2.76,3.72,3.7,6.22.93,2.5,1.4,5.3,1.4,8.39s-.47,5.88-1.4,8.39c-.93,2.5-2.16,4.58-3.7,6.22-1.53,1.65-3.33,3.03-5.4,4.14s-4.2,1.91-6.39,2.39ZM42.98,122.25c.3.05.69.08,1.18.08s.88-.03,1.18-.08c.3-.05.66-.21,1.09-.49.43-.28.78-.67,1.04-1.18.27-.51.55-1.27.86-2.27.31-1,.54-2.22.71-3.65.16-1.43.3-3.23.41-5.4.11-2.17.17-4.64.17-7.42s-.06-5.25-.17-7.42c-.11-2.17-.25-3.97-.41-5.4-.16-1.43-.4-2.64-.71-3.63-.31-.99-.59-1.74-.86-2.25-.27-.51-.61-.9-1.04-1.18-.43-.28-.79-.44-1.09-.49-.3-.05-.69-.08-1.18-.08s-.88.03-1.18.08c-.3.05-.67.21-1.1.49-.44.28-.79.67-1.04,1.18-.26.51-.54,1.26-.84,2.25-.31.99-.55,2.2-.72,3.63-.17,1.43-.32,3.23-.43,5.4-.11,2.17-.17,4.64-.17,7.42s.06,5.25.17,7.42c.11,2.17.25,3.97.43,5.4.17,1.43.41,2.65.71,3.65.3,1,.58,1.76.84,2.27.27.51.62.9,1.06,1.18s.81.44,1.1.49Z" />
                <path d="M128.27,100.96c4.74.18,9.37.28,13.89.28,2,0,3.93-.02,5.78-.06,1.85-.04,3.2-.08,4.06-.12l1.26-.09v1.07c-1.49.12-2.42.27-2.77.43-.36.16-.54.52-.54,1.07v20.18h-1.07c0-.1-.01-.23-.05-.38-.03-.15-.14-.43-.32-.84-.18-.41-.42-.77-.72-1.07-.3-.31-.75-.59-1.35-.84-.6-.26-1.3-.38-2.1-.38-1.02,0-2.12.18-3.28.55-1.17.37-2.22.77-3.17,1.21-.95.44-2.22.84-3.82,1.21-1.59.37-3.27.55-5.03.55-2.31,0-4.52-.25-6.64-.74-2.12-.49-4.15-1.29-6.09-2.41-1.94-1.11-3.62-2.49-5.04-4.14s-2.56-3.72-3.4-6.22c-.85-2.5-1.27-5.29-1.27-8.36s.46-5.82,1.36-8.32c.91-2.5,2.12-4.58,3.62-6.22,1.5-1.65,3.27-3.03,5.29-4.15,2.02-1.12,4.1-1.93,6.24-2.42,2.14-.49,4.34-.74,6.61-.74,1.74,0,3.36.14,4.88.41s2.69.58,3.54.9c.85.33,1.74.63,2.68.9.94.28,1.79.41,2.54.41.59,0,1.12-.09,1.59-.28.47-.18.83-.4,1.07-.66.25-.26.44-.51.6-.77.15-.26.25-.48.29-.66l.06-.28h1.2c-.12,3.03-.18,5.92-.18,8.68,0,1.66.02,3.3.06,4.94.04,1.64.08,2.85.12,3.65l.06,1.23h-1.32c-3.39-11.26-7.99-16.9-13.8-16.9-2,0-3.58.55-4.74,1.66-1.16,1.1-2.04,3.15-2.65,6.15-.61,2.99-.92,7.17-.92,12.53,0,2.72.05,5.15.14,7.28.09,2.14.21,3.91.37,5.32.15,1.41.35,2.63.58,3.65.23,1.02.46,1.8.69,2.33.22.53.5.95.83,1.24.33.3.61.48.84.55.23.07.52.11.84.11.55,0,1.01-.06,1.36-.17s.74-.41,1.13-.89c.4-.48.71-1.17.94-2.05.22-.89.41-2.15.55-3.77.14-1.63.21-3.6.21-5.93v-5.7c0-.59-.36-1.03-1.07-1.32-.72-.29-2.04-.46-3.96-.52v-1.07Z" />
                <path d="M155.43,107.58c0-2.72.56-5.14,1.67-7.25,1.11-2.12,2.62-3.81,4.52-5.07,1.9-1.27,4.02-2.22,6.36-2.87,2.34-.64,4.84-.97,7.5-.97,2.1,0,4.12.19,6.04.58,1.92.39,3.74,1.01,5.46,1.87,1.72.86,3.2,1.91,4.45,3.14,1.25,1.24,2.24,2.76,2.97,4.57.74,1.81,1.1,3.81,1.1,5.99s-.37,4.19-1.1,5.99c-.74,1.81-1.73,3.33-2.97,4.57-1.25,1.24-2.73,2.28-4.45,3.13-1.72.85-3.54,1.47-5.46,1.85-1.92.39-3.94.58-6.04.58s-4.12-.19-6.04-.58c-1.92-.39-3.74-1.01-5.46-1.85-1.72-.85-3.21-1.89-4.46-3.13-1.26-1.24-2.25-2.76-2.99-4.57-.74-1.81-1.1-3.81-1.1-5.99ZM178.98,105.43c0-3.68-.11-6.45-.34-8.31-.23-1.86-.57-3.11-1.04-3.74-.47-.63-1.18-.95-2.12-.95s-1.65.32-2.12.95c-.47.63-.82,1.88-1.06,3.74-.24,1.86-.35,4.63-.35,8.31v4.26c0,3.68.12,6.45.35,8.31.23,1.86.59,3.11,1.06,3.74.47.63,1.18.95,2.12.95s1.64-.32,2.12-.95c.47-.63.82-1.88,1.04-3.74.22-1.86.34-4.63.34-8.31v-4.26Z" />
                <path d="M198.33,121.81l1.32-.12c.74-.06,1.24-.17,1.52-.34.28-.16.41-.49.41-.98v-25.85c0-.55-.46-.87-1.38-.95l-1.32-.12v-.89h2.97c3.54,0,6.54-.1,9-.29,2.46-.19,4.03-.36,4.69-.51.66-.14,1.12-.28,1.36-.4-.37,4.03-.55,7.88-.55,11.56h.06c.04-.74.1-1.39.17-1.96.07-.57.21-1.28.43-2.12.21-.84.49-1.57.81-2.21.33-.63.79-1.29,1.4-1.98.6-.68,1.3-1.25,2.08-1.7.79-.45,1.78-.82,2.97-1.1,1.2-.29,2.53-.43,4-.43,2.72,0,5.02.69,6.91,2.05,1.89,1.37,3.1,3.22,3.63,5.55,1.25-5.07,5.02-7.6,11.31-7.6,3.19,0,5.77.91,7.76,2.73,1.98,1.82,2.97,4.22,2.97,7.21v19.01c0,.49.14.82.43.98.29.16.79.28,1.5.34l1.32.12v.89c-2.96-.16-6.66-.25-11.1-.25-1.64,0-3.32.02-5.04.06-1.73.04-3.04.08-3.94.12l-1.38.06v-.89l.89-.12c.39-.04.68-.09.87-.15.19-.06.37-.18.52-.37.15-.18.23-.45.23-.8v-21.46c0-1.92-.78-2.88-2.33-2.88-1.19,0-2.11.69-2.78,2.05-.66,1.37-1,3.36-1,5.98v16.31c0,.35.08.61.23.8.15.18.33.31.52.37s.49.11.87.15l.89.12v.89c-3.23-.16-6.68-.25-10.36-.25-1.64,0-3.32.02-5.04.06-1.73.04-3.05.08-3.97.12l-1.35.06v-.89l.89-.12c.37-.06.65-.12.84-.17.19-.05.37-.17.54-.37.16-.19.25-.45.25-.78v-21.46c0-1.92-.78-2.88-2.33-2.88-1.19,0-2.11.72-2.78,2.16-.66,1.44-1,3.48-1,6.12v16.07c0,.35.08.61.25.8.16.18.34.31.54.37.19.06.48.11.87.15l.86.12v.89c-3.23-.16-6.68-.25-10.36-.25-1.96,0-3.87.02-5.72.06-1.85.04-3.2.08-4.06.12l-1.32.06v-.89Z" />
                <path d="M304.11,105.37l-.06,1.81h-21.28c.02,2.64.23,4.83.63,6.59.4,1.76,1.01,3.11,1.84,4.06s1.76,1.61,2.81,1.98c1.04.37,2.32.55,3.83.55,2.6,0,4.9-.87,6.9-2.61,2-1.74,3.26-4.01,3.77-6.81l1.32.18c-.47,2.74-1.55,5.07-3.23,6.99s-3.76,3.33-6.22,4.23c-2.46.9-5.22,1.35-8.26,1.35-1.98,0-3.91-.19-5.78-.58s-3.66-1.01-5.38-1.85c-1.72-.85-3.21-1.89-4.49-3.11-1.28-1.23-2.29-2.75-3.05-4.57-.76-1.82-1.13-3.82-1.13-6.01s.37-4.12,1.12-5.92c.75-1.8,1.75-3.32,3.02-4.57,1.27-1.25,2.75-2.3,4.46-3.17s3.52-1.5,5.43-1.9c1.91-.4,3.89-.6,5.93-.6,2.41,0,4.7.33,6.87.98,2.17.65,4.06,1.57,5.69,2.74,1.62,1.18,2.91,2.65,3.86,4.42.95,1.77,1.43,3.71,1.43,5.81ZM282.77,105.86h2.45c.57,0,1.06-.05,1.46-.15.4-.1.81-.32,1.23-.66.42-.34.74-.88.95-1.64.21-.76.32-1.72.32-2.88,0-1.43-.07-2.66-.2-3.68-.13-1.02-.29-1.81-.48-2.38-.18-.56-.43-1-.74-1.32s-.59-.52-.86-.6c-.27-.08-.58-.12-.95-.12-.8,0-1.42.31-1.86.92s-.77,1.72-1,3.33c-.23,1.6-.34,3.87-.34,6.79v2.39Z" />
                <path d="M323.55,123.71c-1.59,0-3.22-.17-4.89-.52-1.67-.35-3.14-.69-4.43-1.04-1.29-.35-2.28-.52-2.97-.52-.49,0-.93.07-1.32.21-.39.14-.68.32-.87.52-.19.2-.36.41-.49.61-.13.2-.21.38-.23.52l-.06.21h-.98c.04-1.88.06-4.12.06-6.71l-.06-6.87h.98c1.53,3.95,3.63,7.03,6.3,9.24,2.67,2.22,5.62,3.33,8.85,3.33,2.19,0,3.79-.31,4.81-.94s1.53-1.35,1.53-2.19c0-.9-.37-1.64-1.12-2.21s-2.03-1.11-3.85-1.62l-6.71-1.9c-3.56-1-6.16-2.42-7.82-4.25-1.66-1.83-2.48-4.17-2.48-7.04,0-3.17,1.27-5.82,3.82-7.94s6.03-3.19,10.44-3.19c1.55,0,3.06.17,4.51.52,1.45.35,2.69.7,3.71,1.04,1.02.35,1.8.52,2.33.52.78,0,1.41-.17,1.9-.52.49-.35.79-.69.89-1.04l.15-.52h1.01c-.08,2.08-.12,3.88-.12,5.4l.12,5.98h-1.01c-1.1-3.07-2.9-5.56-5.38-7.48-2.48-1.92-5.17-2.88-8.05-2.88-1.78,0-3.17.29-4.19.86-1.01.57-1.52,1.33-1.52,2.27,0,.76.3,1.38.89,1.85.59.48,1.59.92,3,1.3l6.71,1.87c3.99,1.1,6.93,2.64,8.83,4.61,1.9,1.97,2.85,4.45,2.85,7.44,0,1.82-.42,3.45-1.26,4.89-.84,1.44-1.97,2.6-3.39,3.48-1.42.88-3.03,1.55-4.81,2.01-1.79.46-3.68.69-5.69.69Z" />
            </g>
        </svg>
    )
}