using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using frontend;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http;
using System;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.RegisterAsCustomElement<InterestList>("interest-list");

await builder.Build().RunAsync();
