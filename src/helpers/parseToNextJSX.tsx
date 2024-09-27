import Image from 'next/image';
import parse, { domToReact, Element, Text } from 'html-react-parser';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const isElement = (element: unknown): element is Element =>
  element instanceof Element;
const isText = (text: unknown): text is Text => text instanceof Text;

export function parseToNextJSX(rawHtml: string) {
  return parse(rawHtml, {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        const children = domNode.children.filter(
          (node): node is Element | Text => isElement(node) || isText(node),
        );

        switch (domNode.name) {
          // <h2>...</h2>
          case 'h2':
            return (
              <p className={twMerge('mc-content-h2')}>{domToReact(children)}</p>
            );
          // <p>...</p>
          case 'p':
            return (
              <p className={twMerge('mc-content-p')}>{domToReact(children)}</p>
            );
          // <figure>...</figure>
          case 'figure':
            return (
              <figure className={twMerge('mc-content-figure')}>
                {domToReact(children)}
              </figure>
            );
          // <a>...</a>
          case 'a': {
            const atr = domNode.attribs;
            // http が含まれる場合は a タグを使用
            if (atr.href.indexOf('http') !== -1) {
              return (
                <a href={atr.href} target="_blank" rel="noopener noreferrer">
                  {domToReact(children)}
                </a>
              );
            }

            // それ以外は Link タグに置換
            return (
              <Link href={domNode.attribs.href}>{domToReact(children)}</Link>
            );
          }
          // <img>...</img>
          case 'img': {
            const atr = domNode.attribs;
            return (
              <Image
                src={atr.src}
                alt={atr.alt}
                width={Number(atr.width)}
                height={Number(atr.height)}
              ></Image>
            );
          }
          default:
            break;
        }
      }
    },
  });
}
