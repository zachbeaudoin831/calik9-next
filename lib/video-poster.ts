// Poster frame for a GHL-hosted funnel video. iOS Safari shows a black box
// for <video preload="metadata"> until the user taps play, so every funnel
// video gets a still extracted from its own footage (public/images/funnel/posters).
export function posterFor(src: string): string | undefined {
  const m = src.match(/\/media\/([a-f0-9]+)\.mp4$/);
  return m ? `/images/funnel/posters/${m[1]}.jpg` : undefined;
}
