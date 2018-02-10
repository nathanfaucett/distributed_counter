defmodule DistributedCounterWeb.Counter do
  use Phoenix.Channel

  def join("counter:" <> room, _message, socket) do
    {:ok, socket}
  end

  def handle_in("update", message, socket) do
    broadcast! socket, "udpate", message
    {:noreply, socket}
  end
end