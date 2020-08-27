module.exports = {
    plugins: [
        [
            'docusaurus-plugin-typedoc',
            {
                inputFiles: ['./src/'],
                docsRoot: 'docs',
                out: '',
                skipSidebar: false,
                mode: 'file',
                target: 'ES5',
            },
        ],
    ],
};
