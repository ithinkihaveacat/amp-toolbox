declare module "amp-toolbox-runtime-version" {
  export function currentVersion(args?: {canary: boolean}): Promise<number>;
}
