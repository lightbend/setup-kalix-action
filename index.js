const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const exec = require('@actions/exec');

async function run() {
    try {
        const token = core.getInput('token', { required: true });
        const projectId = core.getInput('project-id', { required: true });
        const runnerTempDir = process.env.RUNNER_TEMP;
        const kalixBin = runnerTempDir + "/kalix-bin";
        console.log(`Downloading install-cli script`);
        const scriptPath = await tc.downloadTool('https://docs.kalix.io/install-cli.sh');
        console.log(`Downloaded ${scriptPath}`);

        await exec.exec(`chmod +x ${scriptPath}`);

        await exec.exec(`mkdir ${kalixBin}`);
        await exec.exec(`${scriptPath} --prefix ${kalixBin} --yes --verbose`);

        core.addPath(kalixBin);

        console.log(`Configuring kalix CLI...`);
        await exec.exec(`kalix config set project ${projectId}`);
        await exec.exec(`kalix config set refresh-token ${token}`);
        await exec.exec(`kalix auth container-registry configure --disable-prompt`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();