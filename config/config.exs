# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :distributed_counter,
  ecto_repos: [DistributedCounter.Repo]

# Configures the endpoint
config :distributed_counter, DistributedCounterWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "MdjvypaKEn+7CPP+C1QOTvg87EneZ+5N7n388FPMfUHOqthwVW9d7G4TzUd+fZ/p",
  render_errors: [view: DistributedCounterWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: DistributedCounter.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
