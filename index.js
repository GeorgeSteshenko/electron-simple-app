console.log(process);
let output = `
      <h2 class="page-header">App Version Data</h2>
      <ul class="list-group">
        <li class="list-group-item">Node: ${process.versions.node}</li>
        <li class="list-group-item">Chrome: ${process.versions.chrome}</li>
        <li class="list-group-item">Electron: ${process.versions.electron}</li>
      </ul>
      <hr />
      <h2 class="page-header">System Specs</h2>
      <ul class="list-group">
        <li class="list-group-item">System Architecture: ${process.arch}</li>
        <li class="list-group-item">Processor Identifier: ${
          process.env.PROCESSOR_IDENTIFIER
        }</li>
        <li class="list-group-item">Printer: ${process.env.PRINTER}</li>
      </ul>
      <hr />
      <h2 class="page-header">System Memory</h2>
      <ul class="list-group">
        <li class="list-group-item">Total: ${(
          process.getSystemMemoryInfo().total / 1048575
        ).toFixed(2)} Gb</li>
        <li class="list-group-item">Free: ${(
          process.getSystemMemoryInfo().free / 1048575
        ).toFixed(2)} Gb</li>
        <li class="list-group-item">Swap Total: ${
          process.getSystemMemoryInfo().swapTotal
        }</li>
        <li class="list-group-item">Swap Free: ${
          process.getSystemMemoryInfo().swapFree
        }</li>
      </ul>
      <br />
      `;

document.querySelector("#output").innerHTML = output;
