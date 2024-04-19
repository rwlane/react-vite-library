shared react component library built with vite and typescript

Error:
error TS2694: Namespace <file path deleted> has no exported member 'IOptions'. 
This link explains above error: https://github.com/isaacs/rimraf/issues/264

Fix:
I had to remove @type/glob/index.d.ts and @type/minimatch/index.d.ts to get library to build. otherwise build would generate error TS2694: Namespace has no exported member IOptions for glob and minimatch

In node_modules, rename @types/glob/index.d.ts and @types/minimatch.d.ts by appending '.orig' to each file name.
Also execute 'npm i rimraf@latest -D'

After applying workaround build succeeds for node 18.12.1 and, most importantly, node 16.20.2.