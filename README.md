# DCS Livery Builder

This is a simple tool built with the [Deno](https://deno.com/) runtime to help you build liveries for [DCS World](https://www.digitalcombatsimulator.com). It is a command line tool that will create the necessary folder structure and `description.lua` file for you. The tool accepts an input `description.json` file that contains all the necessary information about the livery and input textures in either PNG or DDS format. The tool will automatically convert PNG files to DDS format using the `<tool>` tool.

## Input Folder Structure

The input folder structure should look like this:

```base
├── input
│   ├── modules
│   └── pilots
```
