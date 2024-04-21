shared react component library built with vite and typescript

Error:
error TS2694: Namespace <file path deleted> has no exported member 'IOptions'. 
This link explains above error: https://github.com/isaacs/rimraf/issues/264

Fix:
I had to remove @type/glob/index.d.ts and @type/minimatch/index.d.ts to get library to build. otherwise build would generate error TS2694: Namespace has no exported member IOptions for glob and minimatch

In node_modules, rename @types/glob/index.d.ts and @types/minimatch.d.ts by appending '.orig' to each file name.
Also execute 'npm i rimraf@latest -D'

After applying workaround build succeeds for node 18.12.1 and, most importantly, node 16.20.2.

The article was used as a reference to generate a component library:
https://medium.com/wesionary-team/react-component-library-with-vite-and-deploy-in-npm-579c2880d6ff

Step 1: Create react project using vite
npm init vite@latest react-vite-library -- --template react-ts

Replace latest with 4.0.0 and run command. Required vite scripts can be installed using vite@4.0.0 but not vite@4.1.4. 
Edit package.json and change vite and typescript versions to vite@4.1.4 and typescript@4.9.5 once the vite scripts complete.
Delete node_modules and rrun 'npm install'.
In node_modules go into @types/glob and @types/minimatch. Delete the index.d.ts file in both folders. If these files aren't deleted errors are generated when 'npm run build' is executed. This page explains the issue and the fix: https://github.com/isaacs/rimraf/issues/264
