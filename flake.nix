{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
        nodejs = pkgs.nodePackages.nodejs;

        generateSVG = pkgs.stdenv.mkDerivation rec {
          name = "generate-svg";
          src = self;
          buildInputs = [ nodejs ];
          buildPhase = ''
            export NODE_PATH=${src}/node_modules
            node ${src}/generate.js
          '';

          installPhase = ''
            mkdir -p $out
            cp output.svg $out/
          '';
        };

      in {
        packages = {
          svg = generateSVG;
        };

        devShells.default = pkgs.mkShell {
          buildInputs = [
            nodejs
            pkgs.nixpkgs-fmt
          ];
          shellHook = ''
            export NODE_PATH=$PWD/node_modules
          '';
        };
      });
}
