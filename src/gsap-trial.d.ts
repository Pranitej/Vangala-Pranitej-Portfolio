declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | Element | Element[], vars?: Record<string, any>);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
    split(vars?: Record<string, any>): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: Record<string, any>): ScrollSmoother;
    static get(): ScrollSmoother;
    scrollTo(target: string | number | Element, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean;
    kill(): void;
    scrollTrigger: any;
  }
}
