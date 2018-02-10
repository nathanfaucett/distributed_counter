defmodule DistributedCounterWeb.Counter do
  use Phoenix.Channel

  def join("counter:" <> room, message, socket) do
    {:ok, socket}
  end
end