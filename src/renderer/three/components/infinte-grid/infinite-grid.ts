// Author: Fyrestar https://mevedia.com (https://github.com/Fyrestar/THREE.InfiniteGridHelper)

import { Color, PlaneGeometry, ShaderMaterial, DoubleSide, Mesh } from 'three';
import { COLORS } from 'renderer/constants';
import type { InfiniteGridOptions } from './types';

const AXES = 'xyz';
const PLANE_AXES = 'xy';

class InfiniteGrid extends Mesh {
  constructor({ spacingX, spacingY, color, distance }: InfiniteGridOptions) {
    const geometry = new PlaneGeometry(2, 2, 1, 1);

    const material = new ShaderMaterial({
      side: DoubleSide,

      uniforms: {
        uSize1: {
          value: spacingX,
        },
        uSize2: {
          value: spacingY,
        },
        uColor: {
          value: color,
        },
        xAxisColor: {
          value: new Color(COLORS.RED),
        },
        yAxisColor: {
          value: new Color(COLORS.GREEN),
        },
        uDistance: {
          value: distance,
        },
      },
      transparent: true,
      vertexShader: `
        varying vec3 worldPosition;
        uniform float uDistance;
        void main() {
          vec3 pos = position.${AXES} * uDistance;
          pos.${PLANE_AXES} += cameraPosition.${PLANE_AXES};
          worldPosition = pos;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 worldPosition;
        uniform float uSize1;
        uniform float uSize2;
        uniform vec3 uColor;
        uniform vec3 xAxisColor;
        uniform vec3 yAxisColor;
        uniform float uDistance;
        float getGrid(float size) {
          vec2 r = worldPosition.${PLANE_AXES} / size;
          vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
          float line = min(grid.x, grid.y);
          return 1.0 - min(line, 1.0);
        }

        void main() {
          float d = 1.0 - min(distance(cameraPosition.${PLANE_AXES}, worldPosition.${PLANE_AXES}) / uDistance, 1.0);
          float g1 = getGrid(uSize1);
          float g2 = getGrid(uSize2);

          if (worldPosition.x <= 0.5 && worldPosition.x >= -0.5) {
            gl_FragColor = vec4(yAxisColor.rgb, mix(g2, g1, g1) * pow(d, 3.0));
          } else {
            if (worldPosition.y <= 0.5 && worldPosition.y >= -0.5) {
              gl_FragColor = vec4(xAxisColor.rgb, mix(g2, g1, g1) * pow(d, 3.0));
            } else {
              gl_FragColor = vec4(uColor.rgb, mix(g2, g1, g1) * pow(d, 3.0));
            }
          }

          gl_FragColor.a = mix(0.5 * gl_FragColor.a, gl_FragColor.a, g2);
          if ( gl_FragColor.a <= 0.0 ) discard;
        }
      `,
      extensions: {
        derivatives: true,
      },
    });

    super(geometry, material);

    this.frustumCulled = false;
  }
}

export default InfiniteGrid;
