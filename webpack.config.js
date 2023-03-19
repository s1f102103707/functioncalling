export const mode = 'development'
export const devtool = 'inline-source-map'
export const entry = 'pages/index.tsx'
export const module = {
  rules: [
    {
      test: /\.(js|jsx|ts|tsx)$/,
      loader: 'ts-loader',
    },
  ],
}
export const resolve = {
  // React × TypeScriptで使う可能性のある拡張子を全て記述
  extensions: ['.ts', '.js', '.tsx', '.jsx'],
}
