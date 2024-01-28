# We strongly recommend using the required_providers block to set the
# Azure Provider source and version being used
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
  }
}

provider "azurerm" {
  features {}
}

provider "github" {
  token = #{TERRAFORM_GITHUB_TOKEN}#
}

variable "github_repository_name" {
  type = string
}

# Create a resource group
resource "azurerm_resource_group" "appResourceGroup" {
  name     = "solid-client-az-functions-rg"
  location = "eastus"
}

resource "azurerm_static_site" "staticSite" {
  name                = "solid-client"
  resource_group_name = azurerm_resource_group.appResourceGroup.name
  location            = "eastus2"
}

resource "github_actions_secret" "staticSiteDeploymentToken" {
  repository      = var.github_repository_name
  secret_name     = "SOLID_STATIC_SITE_DEPLOYMENT_TOKEN"
  plaintext_value = azurerm_static_site.staticSite.api_key
}